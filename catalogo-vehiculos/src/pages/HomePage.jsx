import { Container, Title, Stack, Grid, rem } from '@mantine/core';
import Header from '../components/Header';
import VehicleCard from '../components/VehicleCard';
import { vehicleList } from '../data/vehicleData';

function HomePage() {
  // Usamos vehicleList (el array de todos los vehículos) para el Home
  return (
    <>
      <Header />
      <Container size="xl" py="xl">
        <Title order={1} mb="xl" size={rem(32)}>
            Bienvenido al Catálogo de Vehículos de AutomotoresReiga
        </Title>
        <Stack gap="xl">
          <Grid>
            {/* Mapea todos los vehículos disponibles */}
            {vehicleList.map((vehicle) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={vehicle.id}>
                <VehicleCard vehicle={vehicle} /> 
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

export default HomePage;