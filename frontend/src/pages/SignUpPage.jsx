import { useEffect, useState } from "react";
import {
  Mail,
  MessageSquare,
  User,
  Eye,
  EyeOff,
  Lock,
  Loader2,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp, authUser } = useAuthStore();

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser, navigate]);

  const validateForm = () => {
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    )
      return toast.error("All fields are required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (formData.password.trim().length < 6)
      return toast.error("Password is too short (Min length: 6)");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) {
      signup(formData);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/**Left side of form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">
                Get started with your free account
              </p>
            </div>
          </div>
          5
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* fullName */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                {/* User Icon */}
                <div className="absolute inset-y-0 left-3 flex items-center z-10">
                  <User className="size-5 text-gray-400" />
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  className="input input-bordered w-full pl-10 relative z-0"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                {/* Mail Icon */}
                <div className="absolute inset-y-0 left-3 flex items-center z-10">
                  <Mail className="size-5 text-gray-400" />
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  className="input input-bordered w-full pl-10 relative z-0"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            {/* password */}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                {/* Mail Icon */}
                <div className="absolute inset-y-0 left-3 flex items-center z-10">
                  <Lock className="size-5 text-gray-400" />
                </div>

                {/* Input Field */}
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 relative z-0"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye className="size-5 text-base-content/40" />
                  ) : (
                    <EyeOff className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to={"/login"} className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <AuthImagePattern
        title={"Simple. Reliable. Private"}
        subtitle={
          "Connect with firends, share moments, and stay in touch with your loved ones."
        }
      />
    </div>
  );
};

export default SignUpPage;
