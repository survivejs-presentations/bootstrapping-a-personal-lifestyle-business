// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
  //Text
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
    survivejs: require("../images/survivejs.png")
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
              "Trying" in English
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Background</Heading>
          <List>
            <Appear>
              <ListItem>
                Vocational studies (electronics, abitur), university (MSc)
                (software engineering, business, mathematics)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Freelancing through a co-op and startup experiences
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
          <Heading size={1}>Background</Heading>
          <List>
            <Appear>
              <ListItem>
                I came by a webpack related blog post by Christian Alfoni and
                started brewing a book idea (2014 October)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>SurviveJS was born as a result (2015 January)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Business idea: cover related topics to help people deal with
                JavaScript
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Started from webpack and React. Still exploring the space.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Publishing</Heading>
          <List>
            <Appear>
              <ListItem>
                Decided to self-publish (publisher was not interested) through
                LeanPub (later Amazon)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                First three months were tough. Saved by Jésus Rodriquez
                (thanks!), my first technical editor
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>
              If you want to travel fast, travel alone. To travel far, travel
              together.
            </Quote>
            <Cite>African proverb</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Community</Heading>
          <List>
            <Appear>
              <ListItem>Semi-open approach</ListItem>
            </Appear>
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

        <Slide transition={slideTransition}>
          <Heading size={1}>Technology</Heading>
          <List>
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
                Site using <Link href="https://antwar.js.org/">
                  Antwar
                </Link>{" "}
                (own, custom tool), GitHub Pages, Cloudflare
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Gitter for Chat, Disqus for commenting</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Marketing</Heading>
          <List>
            <Appear>
              <ListItem>Focus on inbound channels (site, Twitter)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Community service through developer interviews (60+ and
                counting)
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
                Products - I.e. writing books. Successful but time consuming.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Contracting - I.e. developing specific functionality. Good short
                term but sacrifices long term success.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consulting and training - I.e. helping with specific problem(s).
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
              "The way of living" in English
            </Heading>
          </Appear>
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
              "Personal" in English
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>
              There are two great days in a person’s life – the day we are born
              and the day we discover why
            </Quote>
            <Cite>William Barclay</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary" fit>
            Conclusion
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading caps fit size={1}>
            JavaScript Usage on Sites
          </Heading>
          <Markdown>
            {`
* 2011 - 38.2%
* 2013 - 60.4%
* 2015 - 70.5%
* 2016 - 73.5%
* Source: [W3Techs](http://w3techs.com/technologies/history_overview/javascript_library/all/y)
        `}
          </Markdown>
        </Slide>

        <Slide transition={slideTransition}>
          <Appear fid="1">
            <Heading size={2} caps fit>
              Inline JavaScript
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="tertiary">
              AJAX (async)
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit>
              Single Page Applications
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="tertiary">
              Universal JavaScript
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading caps fit size={1}>
            Build Tools
          </Heading>
          <Layout>
            <Table>
              <thead>
                <TableRow>
                  <TableHeaderItem>1st Gen.</TableHeaderItem>
                  <TableHeaderItem>2nd Gen.</TableHeaderItem>
                  <TableHeaderItem>3rd Gen.</TableHeaderItem>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableItem>Make</TableItem>
                  <TableItem>Grunt</TableItem>
                  <TableItem>Browserify</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem />
                  <TableItem>Gulp</TableItem>
                  <TableItem>Webpack</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem />
                  <TableItem>Broccoli</TableItem>
                  <TableItem>JSPM</TableItem>
                </TableRow>
              </tbody>
            </Table>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.survivejs} margin="40px auto" height="324px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Solution</Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>Minimal Demo</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/demo.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Exercises</Heading>
          <List>
            <Appear>
              <ListItem>Exercise 1</ListItem>
            </Appear>
            <Appear>
              <ListItem>*Exercise 2</ListItem>
            </Appear>
            <Appear>
              <ListItem>**Exercise 3</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>SurviveJS</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
