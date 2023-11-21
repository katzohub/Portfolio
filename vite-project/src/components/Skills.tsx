import { Typography, Card, CardContent } from "@mui/material/";
import Glide from "@glidejs/glide";
import usePageStyles from "../style";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { useEffect } from "react";

const mySkills = [
  {
    id: 1,
    skills: "HTML",
    value: `I learned my skills at: 
      <a href="https://skillmea.sk/" target="_blank">skillmea.sk</a>,
      <a href="https://www.youtube.com/" target="_blank">youtube.com</a>,
      <a href="https://developer.mozilla.org/en-US/" target="_blank">developer.mozilla.org</a>,
      <a href="https://www.w3schools.com/" target="_blank">w3schools.com</a>`,
  },
  {
    id: 2,
    skills: "CSS",
    value: `I learned my skills at: 
    <a href="https://skillmea.sk/" target="_blank">skillmea.sk</a>,
    <a href="https://www.youtube.com/" target="_blank">youtube.com</a>,
    <a href="https://developer.mozilla.org/en-US/" target="_blank">developer.mozilla.org</a>,
    <a href="https://www.w3schools.com/" target="_blank">w3schools.com</a>`,
  },
  {
    id: 3,
    skills: "JS",
    value: `I learned my skills at: 
    <a href="https://skillmea.sk/" target="_blank">skillmea.sk</a>,
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com</a>,
    <a class="link" href="https://developer.mozilla.org/en-US/" target="_blank">developer.mozilla.org</a>,
    <a class="link" href="https://www.w3schools.com/" target="_blank">w3schools.com</a>`,
  },
  {
    id: 4,
    skills: "PHP",
    value: `I learned my skills at: 
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com,</a>
    <a class="link" href="https://www.php.net/" target="_blank">php.net</a>
    `,
  },
  {
    id: 5,
    skills: "SCSS",
    value: `I learned my skills at: 
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com,</a>
    <a class="link" href="https://sass-lang.com/" target="_blank">sass-lang.com</a>
    `,
  },
  {
    id: 6,
    skills: "Tailwind",
    value: `I learned my skills at: 
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com,</a>
    <a class="link" href="https://tailwindcss.com/" target="_blank">tailwindcss.com</a>
    `,
  },
  {
    id: 7,
    skills: "BootStrap",
    value: `I learned my skills at: 
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com,</a>
    <a class="link" href="https://getbootstrap.com/" target="_blank">getbootstrap.com</a>   
    `,
  },
  {
    id: 8,
    skills: "REACT",
    value: `I learned my skills at: 
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com,</a>
    <a class="link" href="https://react.dev/" target="_blank">react.dev,</a>
    <a class="link" href="https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx" target="_blank">bingAI</a>
    `,
  },
  {
    id: 9,
    skills: "TypeScript",
    value: `I learned my skills at: 
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com,</a>
    <a class="link" href="https://www.typescriptlang.org/" target="_blank">typescriptlang.org,</a>
    <a class="link" href="https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx" target="_blank">bingAI</a>
    `,
  },
  {
    id: 10,
    skills: "Git a GitHub",
    value: `I learned my skills at: 
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com,</a>
    <a class="link" href="https://www.typescriptlang.org/" target="_blank">typescriptlang.org,</a>
    <a class="link" href="https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx" target="_blank">bingAI</a>
    `,
  },
  {
    id: 11,
    skills: "Figma",
    value: `I learned my skills at: 
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com</a>   
    `,
  },
  {
    id: 12,
    skills: "UX-UI desing",
    value: `  
    <a class="link" href="https://skillmea.sk/" target="_blank">skillmea.sk,</a>
    <a class="link" href="https://www.youtube.com/" target="_blank">youtube.com</a>    
    `,
  },
];

const Skills = () => {
  const classes = usePageStyles();

  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 4,
      breakpoints: {
        600: { perView: 1 },
        1000: { perView: 2 },
        1600: { perView: 3 },
      },
    }).mount();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        padding: "0 50px",
      }}
    >
      <Typography
        variant="h1"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        Skills
      </Typography>

      <div className="glide">
        <div className={`glide__track`} data-glide-el="track">
          <ul className={`glide__slides`}>
            {mySkills.map((item) => {
              return (
                <li key={item.id} className="glide__slide">
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {item.skills}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      ></Typography>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
