import { useEffect, useState } from "react";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Teaching", path: "/teaching" },
    { name: "Projects", path: "/projects" },
    { name: "Notes", path: "/notes" },
    { name: "Contact", path: "/contact" }
  ];

  const openResume = () => {
    window.open("/Makayla_Resume.pdf", "_blank");
  };

  const navClassName = cn(
    "fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300 overflow-hidden",
    "before:content-[''] before:absolute before:inset-0 before:-z-20 before:bg-gradient-to-r before:from-white/40 before:via-primary/10 before:to-white/40",
    "after:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[inherit] after:border after:border-white/40 after:opacity-70",
    "dark:before:from-white/10 dark:before:via-primary/20 dark:before:to-white/10 dark:after:border-white/10",
    isScrolled
      ? "bg-white/30 shadow-[0_12px_38px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:bg-slate-900/70 dark:shadow-[0_12px_38px_rgba(2,6,23,0.55)]"
      : "bg-white/10 shadow-[0_4px_18px_rgba(15,23,42,0.08)] dark:bg-slate-900/60 dark:shadow-[0_4px_22px_rgba(2,6,23,0.4)]"
  );

  return (
    <nav className={navClassName}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <NavLink
            to="/"
            className="font-bold text-xl text-foreground transition-all duration-300 hover:text-primary hover:tracking-tight"
          >
            Makayla Wang
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm px-3 py-1 rounded-full border border-white/20 transition-all duration-300 hover:text-primary hover:bg-white/60 hover:border-white/50 hover:shadow-md",
                    isActive
                      ? "text-primary font-semibold bg-white/65 border-white/60 shadow-md"
                      : "text-muted-foreground"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={openResume}
              className="bg-white/60 border-white/40 backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md dark:bg-slate-900/60 dark:border-white/10 dark:hover:bg-slate-900/50"
            >
              <Download className="h-4 w-4 mr-1" />
              CV
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full bg-white/40 backdrop-blur hover:bg-white/60 dark:bg-slate-900/60 dark:hover:bg-slate-900/50"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white/75 backdrop-blur-2xl border-l border-white/40 shadow-[0_12px_40px_rgba(15,23,42,0.16)] dark:bg-slate-900/80 dark:border-white/10 dark:shadow-[0_12px_40px_rgba(2,6,23,0.45)]"
            >
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
              className={({ isActive }) =>
                  cn(
                        "text-lg px-4 py-2 rounded-full border border-white/20 transition-all duration-300 hover:text-primary hover:bg-white/60 hover:border-white/50",
                        isActive
                          ? "text-primary font-semibold bg-white/65 border-white/60 shadow-md"
                          : "text-muted-foreground"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button
                  variant="outline"
                  onClick={openResume}
                  className="w-full bg-white/60 border-white/40 backdrop-blur hover:bg-white/80 dark:bg-slate-900/60 dark:border-white/10 dark:hover:bg-slate-900/50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
