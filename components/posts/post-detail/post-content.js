import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import Image from "next/image";
function PostContent(props) {
  const {
    post: { slug, image, title, content }
  } = props;
  //
  const imagePath = `/images/posts/${slug}/${image}`;

  // https://github.com/remarkjs/react-markdown#appendix-b-node-types
  const customRenderers = {
    // overrule markdown <img> - kept for posterity. all imgs are rendered in p tags. see below
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={400}
    //     />
    //   );
    // },
    // dont render images within a P
    paragraph(paragraph) {
      const { node } = paragraph;
      // if p has img as child
      if (node.children[0].type === "image") {
        const childImage = node.children[0];
        console.log(`childImage.url`, childImage.url);
        return (
          <div className={classes.image}>
            <Image
              // watchout !src if nested image
              src={`/images/posts/${slug}/${childImage.url}`}
              alt={image.alt}
              width={600}
              height={400}
            />
          </div>
        );
      } else {
        return <p> {paragraph.children} </p>;
      }
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
