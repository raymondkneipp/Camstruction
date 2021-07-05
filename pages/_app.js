import GlobalStyles from "./../components/GlobalStyles";
import tw from "twin.macro";

// const App = ({ Component, pageProps }) => (
//   <div>
//     <GlobalStyles />
//     <Component {...pageProps} />
//   </div>
// );

// export default App;

import { SwitchTransition, Transition } from "react-transition-group";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyles />
      <SwitchTransition>
        <Transition
          key={router.pathname}
          timeout={500}
          in={true}
          onEnter={enter}
          onExit={exit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Component {...pageProps} />
        </Transition>
      </SwitchTransition>
    </>
  );
}

export default MyApp;

function enter(node) {
  gsap.from(node, {
    duration: 0.5,
    autoAlpha: 0,
    y: -50,
  });
}

function exit(node) {
  gsap.to(node, {
    duration: 0.5,
    autoAlpha: 0,
  });
}
