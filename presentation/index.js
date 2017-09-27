// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  //CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    covers: require("../images/covers.jpg"),
    deadEnd: require("../images/dead-end.jpg"),
    drip: require("../images/drip.jpg"),
    evolution: require("../images/evolution.jpg"),
    jsOld: require("../images/js_old.jpg"),
    jsNew: require("../images/js_new.jpg"),
    kanban: require("../images/kanban.gif"),
    jackie: require("../images/jackie.png"),
    lifestyle: require("../images/lifestyle.jpg"),
    indieBundle: require("../images/indiebundle.png"),
    javascript: require("../images/javascript.jpg"),
    megaphone: require("../images/megaphone.jpg"),
    modulecounts: require("../images/modulecounts.png"),
    openclosed: require("../images/openclosed.jpg"),
    survivejs: require("../images/survivejs.png"),
    telaviv: require("../images/telaviv.jpg"),
    wheel: require("../images/wheel.jpg")
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Case SurviveJS
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Bootstrapping a personal lifestyle business
          </Heading>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.drip}
          bgDarken={0.75}
        >
          <Heading size={2} textColor="tertiary">
            Or
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              how a single blog comment
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              change
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              your life
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Topics
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              Entrepreneurship
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              Lifestyle
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              Personal
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              Lessons Learned
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Entrepreneurship
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              AKA
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              Yrittäjyys in Finnish
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              which means
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              “Trying” in English
            </Heading>
          </Appear>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.deadEnd}
          bgDarken={0.75}
        >
          <Heading size={1}>Background</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>
                Vocational studies and abitur, university (Master of Science)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Became involved with open source in 2005 (Blender)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Freelancing through a co-op (RIP) and startup experiences
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Realized these are dead ends if I want to go somewhere in life
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading fit size={1}>
            JavaScript Usage on Sites
          </Heading>
          <List>
            <ListItem>2011 - 43.0%</ListItem>
            <ListItem>2013 - 55.0%</ListItem>
            <ListItem>2015 - 62.0%</ListItem>
            <ListItem>2016 - 68.0%</ListItem>
            <ListItem>2017 - 73.5%</ListItem>
            <ListItem>
              Source:{" "}
              <Link href="http://w3techs.com/technologies/history_overview/javascript_library/all/y">
                W3Techs
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Module Counts</Heading>
          <Layout>
            <Image src={images.modulecounts} height="454px" />
          </Layout>
          <Layout>
            <Text>
              <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
            </Text>
          </Layout>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.javascript}
          bgDarken={0.75}
        >
          <BlockQuote>
            <Quote>
              I came by a webpack related blog post by Christian Alfoni and
              started brewing a book idea
            </Quote>
            <Cite>2014 October</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition} bgColor="black" notes="">
          <Image src={images.jsOld} margin="0px auto 40px" height="650px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="black" notes="">
          <Image src={images.jackie} margin="0px auto 40px" height="381px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="black" notes="">
          <Image src={images.jsNew} margin="0px auto 40px" height="650px" />
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.javascript}
          bgDarken={0.75}
        >
          <BlockQuote>
            <Quote>
              <b>Business idea:</b> help people deal with JavaScript
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>SurviveJS</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.kanban} margin="0px auto 40px" height="279px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.covers} margin="0px auto 40px" height="600px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Publishing</Heading>
          <List>
            <Appear>
              <ListItem>Pitched to a publisher. No interest.</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Decided to self-publish through LeanPub (later Amazon KDP)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                First three months were tough. Saved by{" "}
                <Link href="https://github.com/foxandxss">
                  Jésus Rodriquez
                </Link>, my first technical editor
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.openclosed}
          bgDarken={0.75}
        >
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Open
              </Heading>
              <Markdown style={{ color: "white" }}>
                {`
* Easier to market
* Easier to collaborate
* Harder to monetize
        `}
              </Markdown>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Closed
              </Heading>
              <Markdown style={{ color: "white" }}>
                {`
* Harder to market
* Harder to collaborate
* Easier to monetize
        `}
              </Markdown>
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.telaviv}
          bgDarken={0.75}
        >
          <BlockQuote>
            <Quote>
              If you want to travel fast, travel alone. To travel far, travel
              together.
            </Quote>
            <Cite>African proverb</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.openclosed}
          bgDarken={0.75}
        >
          <Heading size={1}>Community</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>
                Most content available through web (needed visibility to help
                with marketing) and open for comments
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Set up a book site and chat early on to develop community
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Collaboration through GitHub (edits, PRs)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.wheel}
          bgDarken={0.75}
        >
          <Heading size={1}>Technology</Heading>
          <List textColor="white">
            <Appear>
              <ListItem>
                Content in text format - custom Markdown (Markua)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Collaboration through GitHub (edits, PRs)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Site using{" "}
                <Link href="https://antwar.js.org/" textColor="tertiary">
                  Antwar
                </Link>{" "}
                (own tool), GitHub Pages, Cloudflare
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Gitter for Chat, Disqus for commenting</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Release Process</Heading>
          <List>
            <Appear>
              <ListItem>
                Modeled after open source software development
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Fast, light releases when active</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                1.0.0, 1.1.0, ..., 2.0.0-rc4, 2.0.0, 2.1.0, ..., 2.5.0
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Release notes through the blog</ListItem>
            </Appear>
            <Appear>
              <ListItem>Continuous improvement based on feedback</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.megaphone}
          bgDarken={0.75}
        >
          <Heading size={1}>Marketing</Heading>
          <List textColor="white">
            <Appear>
              <ListItem>Focus on inbound channels (site, Twitter)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Community service through developer interviews (60+)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Idea: provide exposure to lesser known ideas and developers
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Business Models</Heading>
          <List>
            <Appear>
              <ListItem>
                Products - i.e. writing books. Successful but time consuming.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Contracting - i.e. developing specific functionality. Good short
                term but sacrifices long term success.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consulting and training - i.e. helping with specific problem(s).
                Better but a similar problem (less pronounced).
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Current model - Books + upsell consulting/training
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Results</Heading>
          <List>
            <Appear>
              <ListItem>
                Better quality and reach than I could have reached on my own
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Two books (more on the way), translations, paper books (KDP)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Total: 4000+ readers at Leanpub</ListItem>
            </Appear>
            <Appear>
              <ListItem>Thousands more outside (site!)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Results</Heading>
          <List>
            <Appear>
              <ListItem>
                More than hundred contributors (GitHub, Disqus, direct feedback,
                Gitter, ...)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://survivejs.com/blog/blue-arrow-awards-winner-2017/">
                  Blue Arrow Awards winner 2017 - Finnish Code Ambassador
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Touring and clients across Europe</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="black" notes="">
          <Link href="http://www.reactindiebundle.com/">
            <Image
              src={images.indieBundle}
              margin="0px auto 40px"
              height="600px"
            />
          </Link>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Lifestyle
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              AKA
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              Elämäntapa in Finnish
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              which means
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              “The way of living” in English
            </Heading>
          </Appear>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.deadEnd}
          bgDarken={0.75}
        >
          <Heading size={1}>Old Lifestyle</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>7:00-7:30 - Wake up</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                7:30-8:00 - Eat breakfast, check mail, and RSS
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>8:00-11:30 - Work (the most important task)</ListItem>
            </Appear>
            <Appear>
              <ListItem>11:30-12:00 - Quick run on a threadmill</ListItem>
            </Appear>
            <Appear>
              <ListItem>12:00-12:30 - Microwave lunch</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.deadEnd}
          bgDarken={0.75}
        >
          <Heading size={1}>Old Lifestyle</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>12:30-16:30 - Work (less important tasks)</ListItem>
            </Appear>
            <Appear>
              <ListItem>16:30-17:00 - Quick run on a threadmill</ListItem>
            </Appear>
            <Appear>
              <ListItem>17:00-17:30 - Dinner</ListItem>
            </Appear>
            <Appear>
              <ListItem>17:30-22:00 - Chill (computer games, sauna)</ListItem>
            </Appear>
            <Appear>
              <ListItem>22:00-07:00 - Sleep</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.deadEnd}
          bgDarken={0.75}
        >
          <Heading size={1}>Old Lifestyle</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>
                Spent time in nature and occasional drawing classes to escape
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Especially Winters were tough (darkness and isolation!)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Minimalist style</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Still managed to contribute but what if there was more?
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.lifestyle}
          bgDarken={0.75}
        >
          <Heading size={1}>Refactoring Lifestyle</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>
                I was invited to an April tour by ReactiveConf due to my work
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                An opportunity to go beyond my <b>comfort zone</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>As a result I became a nomad unintentionally</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.lifestyle}
          bgDarken={0.75}
        >
          <Heading size={1}>Refactoring Lifestyle</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>Two weeks in Finland since I left it in March</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                I settled with Vienna due to new connections and spent the
                Summer of my life (<Link
                  href="https://medium.com/@bebraw/how-a-month-in-vienna-changed-the-way-i-think-about-life-ba87da8c28a9"
                  textColor="tertiary"
                >
                  long story
                </Link>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>I still travel when a client needs my help</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.lifestyle}
          bgDarken={0.75}
        >
          <Heading size={1}>Refactoring Lifestyle</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>
                Living less regimented yet more enjoyable life
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Success in business enabled a change in lifestyle and continues
                to maintain it
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Big question - what kind of lifestyle I want to develop?
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Personal
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              AKA
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              Henkilökohtainen in Finnish
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              which means
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              “Personal” in English
            </Heading>
          </Appear>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.lifestyle}
          bgDarken={0.75}
        >
          <BlockQuote>
            <Quote>
              In personal business you are <b>the most valuable</b> asset
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.lifestyle}
          bgDarken={0.75}
        >
          <BlockQuote>
            <Quote>Therefore it makes sense to invest into yourself</Quote>
          </BlockQuote>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.lifestyle}
          bgDarken={0.75}
        >
          <BlockQuote>
            <Quote>
              Also a risk - personal life and business are interconnected!
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.lifestyle}
          bgDarken={0.75}
        >
          <Heading size={1}>Personal Change</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>First I grew a business</ListItem>
            </Appear>
            <Appear>
              <ListItem>Only to realize I have to grow myself</ListItem>
            </Appear>
            <Appear>
              <ListItem>And the process never seems to end</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>
              When we are no longer able to change a situation, we are
              challenged to change ourselves
            </Quote>
            <Cite>Viktor E. Frankl</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>#nolife &rarr; #life</Quote>
            <Cite>Juho Vepsäläinen</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.evolution} margin="0px auto 40px" width="590px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Lessons Learned
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              AKA
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              Opit in Finnish
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              which means
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              “Lessons Learned” in English
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            Writing books is hard work
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            Marketing and selling is even harder
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            And personal growth is the hardest
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Focus on developing trust and delivering value straight from the
            start
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            Doing * Telling === Luck
          </Heading>
          <br />
          <Text>
            <Link href="http://www.codusoperandi.com/posts/increasing-your-luck-surface-area">
              Source: Codus Operandi
            </Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            There is always something new to learn and discover
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <BlockQuote>
            <Quote>
              Dare to dream, dare to try, and never give up too easily
            </Quote>
            <Cite>Juho Vepsäläinen</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
