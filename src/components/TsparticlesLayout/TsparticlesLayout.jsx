import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import phonebookBg from '../../images/phonebook-bg3.jpg';

const TsparticlesLayout = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#ffffff',
          },
          image: `url(${phonebookBg})`,
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        backgroundMask: {
          cover: {
            color: {
              value: {
                r: 255,
                g: 255,
                b: 255,
              },
            },
          },
          enable: true,
        },
        fullScreen: {
          zIndex: -1,
        },
        fpsLimit: 60, 
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                force: 60,
              },
            },
          },
          modes: {      
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 1,
              size: 120,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: {
              value: '#ffffff',
            },
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1, 
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40, 
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 }, 
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default TsparticlesLayout;