import {
  Navbar,
  Link,
  Button,
  Text,
  useTheme,
  Modal,
  Row,
  Loading,
} from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import useWallet from "../stores/useWallet";
import { default as NextLink } from "next/link";

function AppNavbar() {
  const { isDark } = useTheme();
  const links = [
    { href: "/", label: "Home", isActive: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const { account, signIn, isSignedIn: isWalletSignedIn } = useWallet();
  const [signOutVisible, setSignOutVisible] = useState(false);

  const isSignedIn = useMemo(() => {
    return isWalletSignedIn();
  }, [isWalletSignedIn]);

  const handleClose = useCallback(
    () => setSignOutVisible(() => false),
    [setSignOutVisible]
  );

  const handleConnectWallet = () => {
    try {
      signIn();
    } catch (error) {
      console.log(error);

      toast.error("Failed to connect wallet");
    }
  };

  const openSignOutDialog = () => setSignOutVisible(true);

  return (
    <>
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
              as={NextLink}
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
            {!isSignedIn ? (
              <Button
                auto
                flat
                as={Link}
                href="#"
                onPress={handleConnectWallet}
              >
                Connect Wallet
              </Button>
            ) : (
              <Button auto flat onPress={openSignOutDialog}>
                {account.accountId}
              </Button>
            )}
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <SignOutDialog visible={signOutVisible} onClose={handleClose} />
    </>
  );
}

type SignOutDialogProps = {
  visible: boolean;
  onClose: () => void;
};

function SignOutDialog({ onClose, visible }: SignOutDialogProps) {
  const { signOut } = useWallet();
  const handleSignOut = () => {
    try {
      signOut();
    } catch (error) {
      toast.error("Failed to sign out");
    } finally {
      onClose();
    }
  };
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={onClose}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Sign out
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Row justify="space-between">
          <Text>Are you sure you want to sign out?</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={onClose}>
          Close
        </Button>
        <Button auto onClick={handleSignOut}>
          Sign out
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppNavbar;
