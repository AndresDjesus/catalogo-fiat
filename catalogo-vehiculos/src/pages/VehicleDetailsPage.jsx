import { Container, Title, Grid, Stack, Button, Text, Table, List, rem, Group, Alert, ThemeIcon } from '@mantine/core';
import { Download, MessageSquare, Car, Info } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import VehicleCarousel from '../components/VehicleCarousel';
import { vehicleData } from '../data/vehicleData'; // Importa el objeto de datos

function VehicleDetailsPage() {
  const { id } = useParams(); 
  const vehicle = vehicleData[id]; // Busca el vehículo en el objeto de datos

  if (!vehicle) {
    return (
      <>
        <Header />
        <Container size="xl" py="xl">
          <Alert color="red" title="Vehículo No Encontrado" icon={<Car size={20} />}>
            El modelo de vehículo que buscas ({id}) no está disponible.
          </Alert>
        </Container>
      </>
    );
  }

  // Filas para la tabla de financiamiento
  const financingRows = vehicle.financing.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td fw={700}>{item.initial}</Table.Td>
      <Table.Td>${item.amount.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</Table.Td>
      <Table.Td>${item['72'].toFixed(2)}</Table.Td>
      <Table.Td>${item['60'].toFixed(2)}</Table.Td>
      <Table.Td>${item['48'].toFixed(2)}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Header />
      <Container size="xl" py="xl">
        <Title order={1} mb="lg">{vehicle.title}</Title>

        <Grid gutter="xl">
          {/* Columna de la Izquierda: Carrusel de Imágenes */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <VehicleCarousel images={vehicle.images} /> 
          </Grid.Col>

          {/* Columna de la Derecha: Detalles, Precio y Financiamiento */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="xl">
              
              {/* Información General */}
              <Stack gap="xs">
                <Title order={3}>Información General</Title>
                <List 
                    size="sm" 
                    spacing="xs"
                    icon={
                        <ThemeIcon color="blue" size={18} radius="xl">
                          <Info size={12} />
                        </ThemeIcon>
                    }
                >
                  {vehicle.specs.map((spec, index) => (
                    <List.Item key={index}>
                      <Text span fw={600}>{spec.label}:</Text> {spec.value}
                    </List.Item>
                  ))}
                </List>
              </Stack>

              {/* Precio */}
              <Stack gap="xs">
                <Title order={3} color="red.7">
                    PRECIO ${vehicle.price.toLocaleString('es-VE', { minimumFractionDigits: 2 })} USD
                </Title>
              </Stack>

              {/* Tabla de Financiamiento */}
              <Stack gap="xs">
                <Title order={4}>Tabla de Financiamiento (Cuota Mensual)</Title>
                <Table striped highlightOnHover withRowBorders withColumnBorders captionSide="bottom">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Inicial</Table.Th>
                      <Table.Th>Monto Inicial</Table.Th>
                      <Table.Th>Cuota</Table.Th>
                      <Table.Th>Ingresos demostrados</Table.Th>
                      <Table.Th>Interés</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{financingRows}</Table.Tbody>
                  <Table.Caption>Los valores son estimados y pueden variar según la tasa de interés.</Table.Caption>
                </Table>
              </Stack>

                  <Stack>
                  <Title order={4}>Tabla de Financiamiento (Cuota Mensual)</Title>
                <Table striped highlightOnHover withRowBorders withColumnBorders captionSide="bottom">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Precio</Table.Th>
                      <Table.Th>Impuesto Placas</Table.Th>
                      <Table.Th>I.V.A sobre el precio</Table.Th>
                      <Table.Th>Total del Vehiculo </Table.Th>
                      <Table.Th>IGTF a Pagar </Table.Th>
                      <Table.Th>Gastos Administrativos</Table.Th>
                      <Table.Th>Total a Pagar</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{financingRows}</Table.Tbody>
                  <Table.Caption>Los valores son estimados y pueden variar según la tasa de interés.</Table.Caption>
                </Table>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
        
        {/* Sección de Descripción y Botones (Full Width) */}
        <Stack gap="xl" mt="xl">
          
          <Stack gap="sm">
            <Title order={3}>Descripción Detallada</Title>
            <Text>{vehicle.description}</Text>
          </Stack>

          {/* Botones de Acción */}
          <Group gap="md">
            <Button
              component="a"
              href={vehicle.fichaTecnicaUrl}
              target="_blank"
              variant="filled"
              size="lg"
              color="blue"
              leftSection={<Download size={rem(20)} />}
            >
              DESCARGAR FICHA TÉCNICA
            </Button>
            
            <Button
              component="a"
              href={vehicle.whatsappLink}
              target="_blank"
              variant="outline"
              size="lg"
              color="green"
              leftSection={<MessageSquare size={rem(20)} />}
            >
              Chatear con un Asesor (WhatsApp)
            </Button>
          </Group>
        </Stack>
      </Container>
    </>
  );
}

export default VehicleDetailsPage;