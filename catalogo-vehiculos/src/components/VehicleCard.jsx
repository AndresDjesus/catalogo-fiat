import { Card, Image, Text, Button, Group, Title, rem } from '@mantine/core';
import { Link } from 'react-router-dom';

function VehicleCard({ vehicle }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={vehicle.images[0]} // Usa la primera imagen
          h={200}
          alt={vehicle.title}
          fallbackSrc="https://placehold.co/600x400?text=Imagen+No+Disponible"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Title order={3} size={rem(20)} lineClamp={2}>
          {vehicle.title}
        </Title>
      </Group>

      <Text fw={700} size="xl" c="blue.7" mb="xs">
        ${vehicle.price.toLocaleString('es-VE')} USD
      </Text>
      
      <Text size="sm" c="dimmed" lineClamp={2} mb="md">
        {vehicle.shortDescription}
      </Text>

      <Button 
        component={Link} 
        to={`/vehiculos/${vehicle.id}`} // Enlace a la página de detalles
        variant="light" 
        color="blue" 
        fullWidth 
        mt="md" 
        radius="md"
      >
        Ver Detalles y Financiamiento
      </Button>
    </Card>
  );
}

export default VehicleCard;