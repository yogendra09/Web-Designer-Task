import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
const Feedback = ({ setFeedback }) => {
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
  });
  const [FormErrors, setFormErrors] = useState({});

  const changeHandler = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required.";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required.";
    }

    if (!data.country.trim()) {
      errors.country = "Country is required.";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Email is invalid.";
    }

    if (!data.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    setFormErrors(errors);
    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const errors = validateFormData(FormData);

    if (Object.keys(errors).length === 0) {
      resetForm();
      toast.success("Feedback submitted successfully");
      setFeedback(false);
    } else {
      console.log("Validation errors:", errors);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      country: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-start">
      <div className="  h-full bg-white rounded-lg shadow-lg">
        <div className="flex items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="font-semibold text-gray-800">Hi Reader,</h1>
            <p className="text-gray-600 text-sm">Here&apos;s your News!</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <h2 className="font-semibold text-gray-800 mb-4">Have a Feedback?</h2>
          <button
            type="button"
            onClick={() => setFeedback(true)}
            className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition-colors"
          >
            We&apos;re Listening!
          </button>
        </div>
      </div>
      <div className="relative top-0 left-0 w-fit h-full bg-white p-10 px-16">
        <button
          onClick={() => setFeedback(false)}
          className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <X className="w-4 h-4 text-red-500" />
        </button>
        <div className="text-center ">
          <h1 className="text-xl font-semibold">
            Thank you so much for taking the time
          </h1>
          <p className="text-sm text-gray-600">
            Please provide the below details!
          </p>
        </div>
        <form onSubmit={submitHandler} className="space-y-6 mt-10">
          {[
            { label: "First Name", name: "firstName" },
            { label: "Last Name", name: "lastName" },
            { label: "Country", name: "country" },
            { label: "Phone Number", name: "phone", type: "number" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name} className="relative">
              <label className="text-sm flex gap-2 absolute -top-4 left-0">
                {label} *
                {FormErrors[name] && (
                  <p className="text-red-500">{FormErrors[name]}</p>
                )}
              </label>
              <input
                name={name}
                value={FormData[name]}
                onChange={changeHandler}
                type={type}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full px-2 pt-5 pb-2 bg-white text-sm border-b-2 border-gray-300 focus:border-[#333] outline-none"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 text-sm bg-emerald-400 hover:bg-emerald-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
