import { SlCalender } from "react-icons/sl";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import properties from "../../data";

const FilterBar = ({ filters, setFilters, onSearch }) => {
  const locations = [...new Set(properties.map((p) => p.location))];
  const types = [...new Set(properties.map((p) => p.type))];
  const prices = properties.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const handleClear = () => {
    setFilters({
      location: "",
      type: "",
      priceRange: "",
      date: null,
    });
  };

  return (
    <div className="bg-[#f8f7ff] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
      <div className="flex flex-col text-left w-full md:w-auto">
        <label className="text-sm text-gray-500 mb-1">Location</label>
        <Select
          value={filters.location}
          onValueChange={(val) => setFilters((f) => ({ ...f, location: val }))}
        >
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc, i) => (
              <SelectItem key={i} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col text-left w-full md:w-auto">
        <label className="text-sm text-gray-500 mb-1">When</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-56 justify-start text-left font-normal"
            >
              <SlCalender className="mr-2 h-4 w-4" />
              {filters.date
                ? format(filters.date, "PPP")
                : "Select Move-in Date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={filters.date}
              onSelect={(val) => setFilters((f) => ({ ...f, date: val }))}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col text-left w-full md:w-auto">
        <label className="text-sm text-gray-500 mb-1">Price</label>
        <Select
          value={filters.priceRange}
          onValueChange={(val) =>
            setFilters((f) => ({ ...f, priceRange: val }))
          }
        >
          <SelectTrigger className="w-56">
            <SelectValue placeholder={`₹${minPrice}–₹${maxPrice}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">₹0–₹1,500</SelectItem>
            <SelectItem value="mid">₹1,500–₹2,500</SelectItem>
            <SelectItem value="high">₹2,500–₹4,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col text-left w-full md:w-auto">
        <label className="text-sm text-gray-500 mb-1">Property Type</label>
        <Select
          value={filters.type}
          onValueChange={(val) => setFilters((f) => ({ ...f, type: val }))}
        >
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((type, i) => (
              <SelectItem key={i} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-3 pt-5 md:pt-0">
        {/* <Button
          className="cursor-pointer w-32 bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={onSearch}
        >
          Search
        </Button> */}
        <Button
          variant="outline"
          className="cursor-pointer w-32 border-red-400 text-red-500 hover:bg-red-100"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
