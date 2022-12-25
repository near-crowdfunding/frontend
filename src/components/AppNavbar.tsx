import { Navbar, Link, Button, Text, useTheme } from "@nextui-org/react";
import { toast } from "react-hot-toast";
import useWallet from "../stores/useWallet";

function AppNavbar() {
  const { isDark } = useTheme();
  const links = [
    { href: "/", label: "Home", isActive: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const { account, isSignedIn, signOut, signIn } = useWallet();

  const handleConnectWallet = () => {
    try {
      signIn();
    } catch (error) {
      console.log(error);

      toast.error("Failed to connect wallet");
    }
  };

  const handleSignOut = () => {
    try {
      signOut();
    } catch (error) {
      toast.error("Failed to sign out");
    }
  };

  return (
    <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
      <Navbar.Toggle showIn="xs" />

      <Navbar.Brand>
        {/* <AcmeLogo /> */}
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {links.map((link) => (
          <Navbar.Link
            key={link.href}
            href={link.href}
            isActive={link.isActive}
          >
            {link.label}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Collapse showIn="xs">
        {links.map((item) => (
          <Navbar.CollapseItem key={item.label}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.href}
            >
              {item.label}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>

      <Navbar.Content>
        <Navbar.Item>
          {!isSignedIn() ? (
            <Button auto flat as={Link} href="#" onPress={handleConnectWallet}>
              Connect Wallet
            </Button>
          ) : (
            <Button auto flat as={Link} href="#" onPress={handleSignOut}>
              {account.accountId}
            </Button>
          )}
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default AppNavbar;
