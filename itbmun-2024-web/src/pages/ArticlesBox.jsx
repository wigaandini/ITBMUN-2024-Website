import React from 'react';
import '../styles/ArticleBox.css';
import { ArticlesList } from '../components/articlescontent.jsx';
import { useState } from 'react';
  
const ArticleBox = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`article-box ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(true)}>
      <img src={article.header.thumbnail} alt={article.header.title} />
      <div className="article-info">
        <h3>{article.header.title}</h3>
        <p>
          {article.header.subtitle} <br />
          {article.header.author} - {article.header.agency}
        </p>
      </div>
      {isOpen && (
        <div className="article-popup">
          <p>{article.content[0].text}</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

const Articles = () => {
  return (
    <div>
      {ArticlesList.map((article, index) => (
        <ArticleBox key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;



// import React from "react";
// import { Box, Wrap, Text, Image } from "@chakra-ui/react";
// import { ArticlesList } from "../components/articlescontent.jsx";
// import { useState } from "react";
// import { Hide } from "@chakra-ui/react";

// function Articles() {
//   const month = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const ArticleCard = ({ articles, idx, onClick }) => {
//     const dd = articles.header.date.getDate();
//     const mm = month[articles.header.date.getMonth()];
//     const yy = articles.header.date.getFullYear();
//     return (
//       <Box
//         w={{ base: "90vw", sm: "80vw", md: "500px" }}
//         p={4}
//         gap={4}
//         display={"flex"}
//         flexDir={"row"}
//         alignItems={"center"}
//         shadow={"md"}
//         transitionTimingFunction={"ease-in-out"}
//         transitionDuration={"0.15s"}
//         _hover={{
//           scale: 2,
//           cursor: "pointer",
//           bgColor: "#F0F0F0",
//         }}
//         onClick={() => {
//           onClick(idx);
//         }}
//       >
//         <Image
//           style={{ flex: "none" }}
//           display={"block"}
//           bg={"#F8F8F8"}
//           w={{ base: 24, md: 40 }}
//           h={{ base: 24, md: 40 }}
//           src={articles.header.thumbnail}
//           objectPosition={"center"}
//           objectFit={"cover"}
//         />
//         <Box
//           h={"full"}
//           display={"flex"}
//           flexDirection={"column"}
//           justifyContent={"space-between"}
//         >
//           {/* Title */}
//           <Text
//             h={20}
//             fontSize={{ base: 14, md: 18 }}
//             textAlign={"left"}
//             overflowY={"hidden"}
//           >
//             {" "}
//             {articles.header.title}{" "}
//           </Text>

//           {/* Description */}
//           <Box display={"flex"} flexDirection={"column"}>
//             <Text fontWeight={"normal"} fontSize={12} textAlign={"left"}>
//               {" "}
//               {articles.header.author}{" "}
//             </Text>
//             <Text fontWeight={"normal"} fontSize={12} textAlign={"left"}>
//               {" "}
//               {mm + " " + dd + ", " + yy}{" "}
//             </Text>
//             <Text fontSize={14} textAlign={"left"}>
//               {" "}
//               {articles.header.agency}{" "}
//             </Text>
//           </Box>
//         </Box>
//       </Box>
//     );
//   };

//   const ImageWithCaption = ({ image, caption }) => {
//     return (
//       <Box my={3} display={"flex"} flexDir={"column"} gap={2}>
//         <Image
//           justifySelf={"self-start"}
//           src={image}
//           maxH={"350px"}
//           h={"100%"}
//           objectPosition={"left"}
//           objectFit={"contain"}
//         />

//         {caption && (
//           <Box display={"flex"} flexDir={"row"} gap={2}>
//             <Text fontSize={{ base: "10px", md: "sm" }} textColor={"gray.500"}>
//               {" "}
//               {caption.text}{" "}
//             </Text>
//             {caption.href && (
//               <a href={caption.href}>
//                 <Text
//                   _hover={{ textColor: "blue" }}
//                   fontSize={{ base: "10px", md: "sm" }}
//                   textColor={"gray.500"}
//                 >
//                   {" "}
//                   {caption.hrefText}{" "}
//                 </Text>
//               </a>
//             )}
//           </Box>
//         )}
//       </Box>
//     );
//   };

//   const ArticlePage = ({ articles, onClick }) => {
//     const dd = articles.header.date.getDate();
//     const mm = month[articles.header.date.getMonth()];
//     const yy = articles.header.date.getFullYear();
//     return (
//       <Box
//         fontFamily={"serif"}
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//         position={"fixed"}
//         top={0}
//         left={0}
//         w={"100%"}
//         h={"100%"}
//         zIndex={10}
//       >
//         {/* Black layer */}
//         <Box
//           onClick={() => {
//             onClick(-1);
//           }}
//           position={"fixed"}
//           cursor={"pointer"}
//           w={"100%"}
//           h={"100%"}
//           bg={"black"}
//           opacity={"0.8"}
//         />

//         {/* Pages */}
//         <Box
//           overflowY={"auto"}
//           display={"flex"}
//           flexDir={"column"}
//           bg={"#F0F0F0"}
//           w={{ base: "90%", md: "60%" }}
//           maxH={{ base: "80%", md: "90%" }}
//           zIndex={20}
//           py={10}
//           px={{ base: 6, md: 16, lg: 28 }}
//           textAlign={"justify"}
//         >
//           {/* Title and subtitle */}
//           <Box mb={4}>
//             <Text
//               fontSize={{ base: "xl", md: "3xl" }}
//               fontWeight={"bold"}
//               fontStyle={"italic"}
//             >
//               {" "}
//               {articles.header.title}{" "}
//             </Text>
//             {articles.header.subtitle && (
//               <Text fontSize={{ base: "sm", md: "md" }}>
//                 {" "}
//                 {articles.header.subtitle}{" "}
//               </Text>
//             )}
//           </Box>

//           {/* Thumbnail Image */}
//           <ImageWithCaption
//             image={articles.header.thumbnail}
//             caption={articles.header.caption}
//           />

//           {/* Author and Date */}
//           <Box
//             my={2}
//             fontWeight={700}
//             display={"flex"}
//             fontSize={{ base: "sm", md: "md" }}
//             flexDir={"column"}
//           >
//             <Box
//               display={"flex"}
//               flexDir={{ base: "column", md: "row" }}
//               gap={{ base: 0, md: 2 }}
//             >
//               <Text>{articles.header.agency}</Text>
//               <Hide below="md"> - </Hide>
//               <Text>{mm + " " + dd + ", " + yy}</Text>
//             </Box>
//             <Text> {"By " + articles.header.author}</Text>
//           </Box>
//           {/* Displaying content */}
//           {articles.content.map((content) => {
//             return (
//               <Box>
//                 {content.topic && (
//                   <Text
//                     mt={3}
//                     fontSize={{ base: "md", md: "lg" }}
//                     fontWeight={"bold"}
//                   >
//                     {" "}
//                     {content.topic}{" "}
//                   </Text>
//                 )}
//                 {content.image && (
//                   <ImageWithCaption
//                     image={content.image}
//                     caption={content.caption}
//                   />
//                 )}
//                 {content.text && (
//                   <Text
//                     style={{ whiteSpace: "pre-line" }}
//                     fontSize={{ base: "sm", md: "md" }}
//                   >
//                     {" "}
//                     {content.text}{" "}
//                   </Text>
//                 )}
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>
//     );
//   };

//   const [articleIdx, setArticleIdx] = useState(-1);
//   return (
//     <Box
//       marginBottom={10}
//       h={"full"}
//       w={"full"}
//       display={"flex"}
//       flexDir={"column"}
//       justifyContent={"center"}
//       alignItems={"center"}
//     >
//       <Box fontSize={"5xl"} fontWeight={"bold"} my={20}>
//         ARTICLES
//       </Box>

//       {/* Open Page*/}
//       {articleIdx !== -1 && (
//         <ArticlePage
//           articles={ArticlesList[articleIdx]}
//           onClick={setArticleIdx}
//         />
//       )}

//       <Wrap
//         spacing={5}
//         px={{ base: 2, md: 10 }}
//         display={"flex"}
//         justify={"center"}
//         alignItems={"center"}
//       >
//         {ArticlesList.toReversed().map((articles, index) => {
//           const invertedIdx = ArticlesList.length - index - 1;
//           return (
//             <ArticleCard
//               articles={articles}
//               idx={invertedIdx}
//               onClick={setArticleIdx}
//             />
//           );
//         })}
//       </Wrap>
//     </Box>
//   );
// }

// export default Articles;
