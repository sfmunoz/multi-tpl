import {
  Tabs,
  CloseButton,
  Group,
  Paper,
  Button,
  Menu,
  Text,
  useMantineTheme,
} from "@mantine/core";

import {
  IconCalendar,
  IconChevronDown,
  IconPackage,
  IconSquareCheck,
  IconUsers,
} from "@tabler/icons-react";

const CookiesBanner = () => {
  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          Allow cookies
        </Text>
        <CloseButton mr={-9} mt={-9} />
      </Group>
      <Text c="dimmed" fz="xs">
        So the deal is, we want to spy on you. We would like to know what did
        you have for todays breakfast, where do you live, how much do you earn
        and like 50 other things. To view our landing page you will have to
        accept all cookies. That&apos;s all, and remember that we are
        watching...
      </Text>
      <Group justify="flex-end" mt="md">
        <Button variant="default" size="xs">
          Cookies preferences
        </Button>
        <Button variant="outline" size="xs">
          Accept all
        </Button>
      </Group>
    </Paper>
  );
};

const ButtonMenu = () => {
  const theme = useMantineTheme();
  return (
    <Menu
      transitionProps={{ transition: "pop-top-right" }}
      position="top-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <Button
          rightSection={<IconChevronDown size={18} stroke={1.5} />}
          pr={12}
        >
          Create new
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconPackage size={16} color={theme.colors.blue[6]} stroke={1.5} />
          }
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + P
            </Text>
          }
        >
          Project
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSquareCheck
              size={16}
              color={theme.colors.pink[6]}
              stroke={1.5}
            />
          }
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + T
            </Text>
          }
        >
          Task
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconUsers size={16} color={theme.colors.cyan[6]} stroke={1.5} />
          }
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + U
            </Text>
          }
        >
          Team
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconCalendar
              size={16}
              color={theme.colors.violet[6]}
              stroke={1.5}
            />
          }
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + E
            </Text>
          }
        >
          Event
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

function App() {
  return (
    <div>
      <Tabs defaultValue="chat" unstyled>
        <Tabs.List>
          <Tabs.Tab value="chat">Chat</Tabs.Tab>
          <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="account">Account</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
        <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
        <Tabs.Panel value="account">Account panel</Tabs.Panel>
      </Tabs>
      <ButtonMenu />
      <CookiesBanner />
    </div>
  );
}

export default App;
