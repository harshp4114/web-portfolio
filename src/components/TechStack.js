import Tech from "./Tech";
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
        scrub: true,
        scroller: "body",
      },
    });
  }, []);

  return (
    <div
      id="stack"
      className="w-[75vw] h-[75vw] flex flex-wrap-reverse opacity-1 content-start justify-end border-8 border-black border-t-0 rounded-b-xl xl:w-[24rem] xl:h-[24rem] xl:flex xl:flex-wrap-reverse opacity-1 xl:content-start xl:justify-end xl:border-8 xl:border-black xl:border-t-0 xl:rounded-b-xl"
    >
      <div className="w-[75vw] h-[75vw] flex flex-wrap-reverse content-start justify-end border-2 border-white border-t-0 rounded-b-xl xl:w-[24rem] xl:h-[24rem] xl:flex xl:flex-wrap-reverse xl:content-start xl:justify-end xl:border-2 xl:border-white xl:border-t-0 xl:rounded-b-xl">
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314701/spring_kckgkx.jpg"
          url="https://spring.io/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/web-socket_lfokl6.png
"
          url="https://websocket.org/"
        />
         <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/jwt_unuukg.svg"
          url="https://jwt.io/"
        />


        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/ts.svg_vhgtld.png"
          url="https://www.typescriptlang.org/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314701/angular_rhrpcq.png"
          url="https://angular.dev/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314701/c_dycs6h.jpg"
          url="https://www.learn-c.org/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314701/cplus_lmbbng.jpg"
          url="https://isocpp.org/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314701/csharp_dimf3c.png"
          url="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314705/react_mb8iax.jpg"
          url="https://react.dev/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314705/postman_z0okjm.png"
          url="https://www.postman.com/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314701/css_orn9g1.png"
          url="https://www.w3.org/Style/CSS/Overview.en.html"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314705/node_fcsgpx.png"
          url="https://nodejs.org/en"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314704/mysql_gbdnjn.png"
          url="https://www.mysql.com/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314703/mongo_eprkhy.jpg"
          url="https://www.mongodb.com/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314703/javascript_v4un50.png"
          url="https://www.javascript.com/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314702/java_hlapyw.png"
          url="https://www.java.com/en/"
        />
        <div id="scroll" className="hidden"></div>
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314702/html_lulkrr.png"
          url="https://html.com/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314701/dart_felk5u.jpg"
          url="https://dart.dev/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314702/flutter_qyex37.png"
          url="https://flutter.dev/"
        />
        <Tech
          path="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314706/php_akuaki.png"
          url="https://www.php.net/"
        />
      </div>
    </div>
  );
};

export default TechStack;
