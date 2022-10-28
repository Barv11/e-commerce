import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MenuProducts() {
  return (
    <DropdownButton id="dropdown-item-button" title="Productos">
      <Dropdown.Item as="button">Motherboard</Dropdown.Item>
      <Dropdown.Item as="button">Procesador</Dropdown.Item>
    </DropdownButton>
  );
}

export default MenuProducts;

