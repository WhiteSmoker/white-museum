import { Input, Link, Navbar, Text } from "@nextui-org/react";

const headerItems = ["Features", "Legal", "Team", "Help & Feedback"];

const Header = () => {
  return (
    <Navbar id="navbar" isBordered variant={"floating"}>
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Text className="cursor-pointer " b hideIn="xs">
          White&apos;s Museum
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        hideIn="xs"
        variant="highlight-rounded"
      >
        {headerItems.map((item, index) => (
          <Navbar.Link key={item + `${index}`} href="#">
            {item}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content className="w-80">
        <Input
          aria-label="poke-search"
          placeholder="Enter your Poke"
          clearable
          bordered
          fullWidth
          color="primary"
        />
      </Navbar.Content>
      <Navbar.Collapse>
        {headerItems.map((item, index) => (
          <Navbar.CollapseItem key={item + `${index}`}>
            <Link className=" text-current" href="#">
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
