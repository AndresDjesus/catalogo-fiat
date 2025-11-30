import { Carousel } from '@mantine/carousel';
import { Image, Paper, rem } from '@mantine/core';

function VehicleCarousel({ images }) {
  const slides = images.map((url, index) => (
    <Carousel.Slide key={index}>
      <Paper shadow="md" radius="md" withBorder>
        <Image
          src={url}
          alt={`Vista ${index + 1}`}
          h={450} // Altura fija para el carrusel
          fit="cover"
          fallbackSrc="https://placehold.co/900x450?text=Imagen+No+Disponible"
        />
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators // Puntos de navegación
      loop // Vuelve al inicio al llegar al final
      height={rem(450)}
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',
          '&[data-active]': {
            width: rem(40),
          },
        },
      }}
    >
      {slides}
    </Carousel>
  );
}

export default VehicleCarousel;