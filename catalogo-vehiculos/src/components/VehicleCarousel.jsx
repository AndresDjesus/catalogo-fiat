// src/components/VehicleCarousel.jsx
import { Carousel } from '@mantine/carousel';
import { Image, Paper, rem, Modal } from '@mantine/core'; // Importamos Modal
import { useDisclosure } from '@mantine/hooks'; // Importamos el hook

function VehicleCarousel({ images }) {
  // 1. Lógica de Seguridad (Manejo de Array Inválido/Vacío)
  const isImageArrayValid = images && images.length > 0;
  
  if (!isImageArrayValid) {
    // Retorna un placeholder grande si no hay imágenes válidas
    return (
        <Image 
            src="https://placehold.co/900x600?text=Imagen+No+Disponible"
            alt="No hay imágenes disponibles"
            h={rem(600)} // Altura ajustada
            fit="cover"
            radius="md"
        />
    );
  }
  
  // 2. Inicialización del Modal y Estado de Imagen Activa (Ahora es seguro)
  // 'images[0]' es seguro porque verificamos que images.length > 0 arriba
  const [opened, { open, close }] = useDisclosure(false);
  const [activeImage, { set: setActiveImage }] = useDisclosure(images[0]); 

  // Función para manejar el clic en una imagen
  const handleImageClick = (url) => {
    setActiveImage(url);
    open();
  };

  // 3. Generación de Slides
  const slides = images.map((url, index) => (
    <Carousel.Slide key={index}>
      <Paper 
        shadow="md" 
        radius="md" 
        withBorder
        // Hacemos que el cursor indique que es cliqueable y añadimos el evento onClick
        style={{ cursor: 'pointer' }} 
        onClick={() => handleImageClick(url)} 
      >
        <Image
          src={url}
          alt={`Vista ${index + 1}`}
          // 🚨 AUMENTAMOS LA ALTURA DEL CARRUSEL
          h={600} 
          fit="cover"
          fallbackSrc="https://placehold.co/900x600?text=Imagen+No+Disponible"
        />
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <>
      {/* 1. El Carrusel Principal */}
      <Carousel
        withIndicators
        loop
        // 🚨 AUMENTAMOS LA ALTURA DEL CARRUSEL
        height={rem(600)} 
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

      {/* 2. El Modal para la Vista Ampliada */}
      <Modal 
        opened={opened} 
        onClose={close} 
        size="xl" 
        title="Vista Ampliada del Vehículo"
        centered
      >
        <Image 
          src={activeImage} 
          alt="Vista ampliada" 
          fit="contain"
          fallbackSrc="https://placehold.co/1200x800?text=Imagen+No+Disponible"
        />
      </Modal>
    </>
  );
}

export default VehicleCarousel;