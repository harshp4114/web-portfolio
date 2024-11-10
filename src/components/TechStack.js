import Tech from "./Tech";
import springImg from "../assets/images/spring.jpeg";
import angularImg from "../assets/images/angular.png";
import cImg from "../assets/images/c.jpeg";
import cPlusImg from "../assets/images/cplus.jpeg";
import cSharpImg from "../assets/images/csharp.png";
import cssImg from "../assets/images/css.png";
import dartImg from "../assets/images/dart.jpeg";
import flutterImg from "../assets/images/flutter.png";
import htmlImg from "../assets/images/html.png";
import javaImg from "../assets/images/java.png";
import javaScriptImg from "../assets/images/javascript.png";
import mongoImg from "../assets/images/mongo.jpeg";
import mysqlImg from "../assets/images/mysql.png";
import nodeImg from "../assets/images/node.png";
import phpImg from "../assets/images/php.png";
import postmanImg from "../assets/images/postman.png";
import reactImg from "../assets/images/react.jpeg";
import gsap from "gsap";
import { useEffect } from "react";

const TechStack = () => {

  useEffect(() => {
    gsap.from("#tech", {
      opacity: 0,
      duration: 2,
      stagger: 0.5, 
      scrollTrigger: {
        trigger: "#scroll",  
        start: "top 80%",    
        end: "top 40%",   
        scrub:true,
        scroller:"body",
      }
    });
  }, []);
  
  return (
    <div id="stack" className="w-[24rem] h-[24rem] flex flex-wrap-reverse opacity-1 content-start justify-end border-8 border-black border-t-0 rounded-b-xl">
    <div className="w-[24rem] h-[24rem] flex flex-wrap-reverse content-start justify-end border-2 border-white border-t-0 rounded-b-xl">
      <Tech path={springImg} url="https://spring.io/"/>
      <Tech path={angularImg} url="https://angular.dev/"/>
      <Tech path={cImg} url="https://www.learn-c.org/"/>
      <Tech path={cPlusImg} url="https://isocpp.org/"/>
      <Tech path={cSharpImg} url="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"/>
      <Tech path={reactImg} url="https://react.dev/"/>
      <Tech path={postmanImg} url="https://www.postman.com/"/>
      <Tech path={cssImg} url="https://www.w3.org/Style/CSS/Overview.en.html"/>
      <Tech path={nodeImg} url="https://nodejs.org/en"/>
      <Tech path={mysqlImg} url="https://www.mysql.com/"/>
      <Tech path={mongoImg} url="https://www.mongodb.com/"/>
      <Tech path={javaScriptImg} url="https://www.javascript.com/"/>
      <Tech path={javaImg} url="https://www.java.com/en/"/>
      <div id="scroll" className="hidden"></div>
      <Tech path={htmlImg} url="https://html.com/"/>
      <Tech path={dartImg} url="https://dart.dev/"/>
      <Tech path={flutterImg} url="https://flutter.dev/"/>
      <Tech path={phpImg} url="https://www.php.net/"/>
    </div>
    </div>
  );
};

export default TechStack;
