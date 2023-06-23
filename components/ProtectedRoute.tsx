import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProtectedRoute = <P extends {}>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const [showAlert, setShowAlert] = useState(false);
    const [previousRoute, setPreviousRoute] = useState("");

    // Check if user is authenticated and has the necessary role
    const isAuthenticated: boolean = true; // Check if user is authenticated
    const hasRequiredRole: boolean = true; // Check if user has required role

    useEffect(() => {
      const handleAuth = (): void => {
        if (!isAuthenticated) {
          // Save the current route before redirecting to login
          router.push({
            pathname: "/auth/login",
          });
        }
      };

      const handleRole = (): void => {
        if (!hasRequiredRole) {
          setShowAlert(true);
        }
      };

      handleAuth();
      handleRole();
    }, [isAuthenticated, hasRequiredRole, router]);

    const closeModal = (): void => {
      setShowAlert(false);

      router.push(previousRoute, undefined, { shallow: true });
    };

    useEffect(() => {
      const handleRouteChange = (url: string): void => {
        if (url !== "/auth/login") {
          setPreviousRoute((currentRoute) => (currentRoute = url));
        }
      };
      handleRouteChange(router.asPath);
    }, [router.asPath]);

    if (!isAuthenticated) {
      return null; // or a loading indicator while authenticating
    }

    if (showAlert) {
      return (
        <>
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 rounded-lg bg-white p-6">
              <h2 className="mb-4 text-2xl font-bold">Access Denied</h2>
              <p className="mb-4 text-lg">
                You don&apos;t have the required role to access this page.
              </p>
              <button
                className="rounded-lg bg-blue-500 px-4 py-2 text-white"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
          <WrappedComponent {...props} />
        </>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default ProtectedRoute;
