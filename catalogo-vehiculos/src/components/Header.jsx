import { Menu, Group, Button, Container, Anchor, rem, Box } from '@mantine/core';
import { ChevronDown, Car, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vehicleList } from '../data/vehicleData'; 

function Header() {
  // Mapea la lista de vehículos para crear los items del menú
  const menuItems = vehicleList.map((item) => (
    <Menu.Item 
      key={item.id} 
      component={Link} 
      to={`/vehiculos/${item.id}`} // Navega a la ruta dinámica
    >
      {item.title}
    </Menu.Item>
  ));

  return (
    <Box 
      style={{ 
        borderBottom: `${rem(1)} solid var(--mantine-color-gray-2)`, 
        backgroundColor: 'var(--mantine-color-white)',
      }}
    >
      <Container size="xl" py="md">
        <Group justify="space-between">
          
          {/* Logo/Marca */}
          <Anchor 
            component={Link} 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none' 
            }}
          >
             <Car size={24} color="blue" /> 
             <span 
                style={{ 
                    fontSize: rem(20), 
                    fontWeight: 700, 
                    color: 'var(--mantine-color-dark)', 
                    marginLeft: '8px' 
                }}
             >
                RONST
             </span>
          </Anchor>

          {/* Enlaces de Navegación */}
          <Group gap="xl">
            {/* Componente Mantine Menu para el desplegable de Vehículos */}
            <Menu shadow="md" width={300} trigger="hover" openDelay={100} closeDelay={200}>
              <Menu.Target>
                <Button 
                    variant="subtle" 
                    rightSection={<ChevronDown size={14} />} 
                    c="dark" 
                    fw={500}
                >
                  Vehículos
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Nuestros Modelos</Menu.Label>
                {menuItems}
              </Menu.Dropdown>
            </Menu>
            
            <Anchor component={Link} to="/servicios" variant="text" c="dark" fw={500}>
              Servicios
            </Anchor>
            <Anchor component={Link} to="/contacto" variant="text" c="dark" fw={500}>
              <Group gap="xs">
                <Phone size={16} />
                Contacto
              </Group>
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}

export default Header;