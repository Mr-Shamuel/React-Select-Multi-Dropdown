import { useForm } from "react-hook-form";
import Select from "react-select";

const CascadingDropdowns = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  const selectedOption1 = watch("option1");
  const selectedOption2 = watch("option2");
  const selectedOption3 = watch("option3");

  const countries = [
    { value: "usa", label: "United States" },
    { value: "can", label: "Canada" },
    { value: "aus", label: "Australia" },
  ];

  const states = [
    { value: "ny", label: "New York", parentId: "usa" },
    { value: "ca", label: "California", parentId: "usa" },
    { value: "on", label: "Ontario", parentId: "can" },
    { value: "bc", label: "British Columbia", parentId: "can" },
    { value: "nsw", label: "New South Wales", parentId: "aus" },
    { value: "vic", label: "Victoria", parentId: "aus" },
  ];

  const cities = [
    { value: "nyc", label: "New York City", parentId: "ny" },
    { value: "la", label: "Los Angeles", parentId: "ca" },
    { value: "tor", label: "Toronto", parentId: "on" },
    { value: "van", label: "Vancouver", parentId: "bc" },
    { value: "syd", label: "Sydney", parentId: "nsw" },
    { value: "mel", label: "Melbourne", parentId: "vic" },
  ];

  const handleFormSubmit = (data) => {
    console.log(data); // Perform desired actions with form data
  };

  const handleOption1Change = (selectedOption) => {
    setValue("option1", selectedOption);
    setValue("option2", null);
    setValue("option3", null);
    trigger("option1"); // Trigger validation for option1
  };

  const handleOption2Change = (selectedOption) => {
    setValue("option2", selectedOption);
    setValue("option3", null);
    trigger("option2"); // Trigger validation for option2
  };

  const handleOption3Change = (selectedOption) => {
    setValue("option3", selectedOption);
    trigger("option3"); // Trigger validation for option3
  };

  const filteredStates = states.filter(
    (state) => state.parentId === selectedOption1?.value
  );

  const filteredCities = cities.filter(
    (city) => city.parentId === selectedOption2?.value
  );

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Select
        {...register("option1", { required: true })}
        options={countries}
        value={selectedOption1}
        onChange={handleOption1Change}
        isClearable
      />
      {errors.option1 && (
        <span  style={{color:'red'}}>This field is required</span>
      )}

      <Select
        {...register("option2", { required: true })}
        options={filteredStates}
        value={selectedOption2}
        onChange={handleOption2Change}
        isClearable
      />
      {errors.option2 && (
        <span  style={{color:'red'}}>This field is required</span>
      )}

      <Select
        {...register("option3", { required: true })}
        options={filteredCities}
        value={selectedOption3}
        onChange={handleOption3Change}
        isClearable
      />
      {errors.option3 && (
        <span  style={{color:'red'}}>This field is required</span>
      )}

      <input type="submit" value="Submit" />
    </form>
  );
};

export default CascadingDropdowns;
