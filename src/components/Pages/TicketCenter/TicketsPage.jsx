import React, { useState, useContext, useMemo } from "react";
import { AppContext } from "../../../context/AppContext"; // Adjust path if needed
import Button from "../../Button";
import { Link } from "react-router-dom";

// --- Component for a Single Ticket Card (More Colorful) ---
const TicketCard = ({ concert }) => {
  const cheapestAvailable = useMemo(() => {
    if (!concert?.tickets) return null;
    const available = concert.tickets
      .filter((t) => t.available)
      .sort((a, b) => a.price - b.price);
    return available.length > 0 ? available[0] : null;
  }, [concert]);

  if (!concert?.venue || !concert?.tickets) {
    // Simple fallback card
    return (
      <div className="bg-gray-200 border-2 border-gray-400 shadow-[4px_4px_0px_#a0a0a0] p-4 flex items-center justify-center aspect-[16/10] rounded-md">
        <p className="text-gray-600 font-semibold">Event Data Missing</p>
      </div>
    );
  }

  // Define colors for reuse
  const primaryColor = "#FBE502"; // Yellow
  const secondaryColor = "#17A15F"; // Green
  const soldOutColor = "#FB0202"; // Red
  const blackColor = "#000000";

  return (
    // Add colored hover shadow (Secondary Green)
    <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#17A15F] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-200 ease-in-out flex flex-col overflow-hidden rounded-lg group"> {/* Added rounded-lg and group */}
      {/* Image Section */}
      <div className="aspect-[16/10] overflow-hidden border-b-2 border-black bg-gray-200">
         {concert.imageUrl ? (
           <img
             src={concert.imageUrl}
             alt={`${concert.bandName} - ${concert.eventName}`}
             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Scale image on group hover
             loading="lazy"
           />
         ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gradient-to-br from-gray-200 to-gray-300"> {/* Simple gradient placeholder */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
            </div>
         )}
      </div>
      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-black mb-1 leading-tight group-hover:text-secondary transition-colors"> {/* Change title color on hover */}
          {concert.eventName}
        </h3>
        <p className="text-base font-semibold text-gray-800 mb-3"> {/* Darker gray for band */}
          {concert.bandName}
        </p>
        {/* Details with icons */}
        <div className="text-sm mb-4 space-y-2 text-gray-900"> {/* Slightly darker text */}
           <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={blackColor} strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg>
              <span className="font-medium">{concert.date}</span>
           </p>
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={blackColor} strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
              <span className="font-medium">{concert.time}</span>
            </p>
             <p className="flex items-start gap-2">
               {/* Using a distinct color like pink or orange for location */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={blackColor} strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /> </svg>
               <span className="font-medium">
                 {concert.venue.name}, {concert.venue.city}
                 {concert.venue.address && <span className="block text-gray-600 font-normal text-xs">{concert.venue.address}</span>}
               </span>
             </p>
        </div>
         {/* Action Area */}
        <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-3"> {/* Dashed border */}
          {cheapestAvailable ? (
            <p className="text-lg font-bold text-secondary text-center sm:text-left"> {/* Green color */}
               Rp {cheapestAvailable.price.toLocaleString("id-ID")}
               <span className="text-xs font-normal text-gray-600 block sm:inline sm:ml-1">start from</span>
            </p>
          ) : (
            <p style={{ color: soldOutColor }} className="text-lg font-bold text-center sm:text-left"> {/* Red color */}
                Sold Out
            </p>
          )}
          {/* Link wrap Button - Use Primary color for button */}
          <Link to={`/concert/${concert.id}`} className={`w-full sm:w-auto ${!cheapestAvailable ? 'pointer-events-none' : ''}`}>
            <Button
              className={`w-full text-sm py-2 px-5 ${!cheapestAvailable ? "cursor-not-allowed" : ""}`}
              bgColor={!cheapestAvailable ? "bg-gray-400" : "bg-primary"} // Yellow button
              textColor="text-black" // Black text on yellow
              disabled={!cheapestAvailable}
              // Add hover state for the button itself
              style={cheapestAvailable ? { '--button-hover-bg': '#e6c200' } : {}} // Darker yellow on hover (using CSS var for example)
              // You might need to adjust Button component or use direct Tailwind hover:bg-yellow-400 if simpler
            >
              {cheapestAvailable ? 'View Details' : 'Sold Out'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};


// --- Main Tickets Page Component ---
const TicketsPage = () => {
  const { concertsData } = useContext(AppContext);
  const [selectedCity, setSelectedCity] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const flatConcertList = useMemo(() => {
    if (!concertsData || typeof concertsData !== 'object' || Array.isArray(concertsData)) return [];
    return Object.values(concertsData).flat();
  }, [concertsData]);

  const cities = useMemo(() => {
    if (flatConcertList.length === 0) return ["All"];
    const uniqueCities = [...new Set(flatConcertList.map((c) => c.venue.city))].sort();
    return ["All", ...uniqueCities];
  }, [flatConcertList]);

  const { currentConcerts, totalPages } = useMemo(() => {
    if (flatConcertList.length === 0) return { currentConcerts: [], totalPages: 0 };
    const filteredData = selectedCity === "All"
        ? flatConcertList
        : flatConcertList.filter((concert) => concert.venue.city === selectedCity);
    const pages = Math.ceil(filteredData.length / itemsPerPage);
    const safeCurrentPage = Math.max(1, Math.min(currentPage, pages || 1));
    const indexOfLastItem = safeCurrentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const itemsToShow = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    return { currentConcerts: itemsToShow, totalPages: pages };
  }, [selectedCity, flatConcertList, itemsPerPage, currentPage]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Page Background: Brighter Gradient? Or pattern? Let's try slightly brighter.
  // Added min-h-screen
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 min-h-screen">
      {/* Header - Add color */}
      <div className="mb-10 md:mb-14 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-3 relative inline-block">
           <span className="absolute -top-2 -left-4 w-8 h-8 bg-secondary rounded-full -z-10 animate-pulse"></span> {/* Decorative Pulse Green */}
           <span className="absolute -bottom-2 -right-4 w-10 h-10 bg-primary rounded-md -z-10 transform rotate-12"></span> {/* Decorative Yellow */}
           Reggae Concert Tickets
        </h1>
        <p className="text-lg md:text-xl text-gray-800 font-medium"> {/* Darker subtitle */}
          Find your next positive vibration!
        </p>
      </div>

      {/* Filter Buttons - More distinct hover */}
      <div className="flex justify-center flex-wrap gap-3 mb-10 md:mb-12">
        {cities.map((city) => {
          const isActive = selectedCity === city;
          return (
            <Button
              key={city}
              onClick={() => handleCityChange(city)}
              bgColor={isActive ? "bg-primary" : "bg-white"} // Active is Yellow
              textColor="text-black"
              className={`text-sm px-5 py-2.5 ${ // Slightly larger padding
                isActive
                  ? "font-bold shadow-[3px_3px_0_black]"
                  : "hover:bg-green-100 hover:shadow-[3px_3px_0_black] hover:font-semibold" // Hover: Light Green bg, gain shadow & bold
              }`}
              style={isActive ? { transform: 'translate(1px, 1px)', boxShadow: '2px 2px 0 black'} : {}}
            >
              {city}
            </Button>
          );
        })}
      </div>

      {/* Ticket Grid or Loading/Empty State */}
      {flatConcertList.length === 0 && cities.length <= 1 ? ( // Loading state
          <div className="text-center py-20">
             <div className="inline-block p-8 bg-white border-4 border-black shadow-[8px_8px_0px_#17A15F]"> {/* Green shadow */}
                <p className="text-xl text-secondary font-semibold animate-pulse">Loading concerts...</p>
             </div>
          </div>
       ) : currentConcerts.length > 0 ? ( // Grid with concerts
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentConcerts.map((concert) => (
            <TicketCard key={concert.id} concert={concert} />
          ))}
        </div>
      ) : ( // Empty state after loading/filtering
        <div className="text-center py-20">
          <div className="inline-block p-10 bg-white border-4 border-black shadow-[8px_8px_0px_#FBE502]"> {/* Yellow shadow */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-5">
              No <span className="text-secondary font-bold">reggae vibes</span> found for "<span className="font-bold">{selectedCity}</span>" right now.
            </h3>
             {selectedCity !== "All" && (
               <Button
                 onClick={() => handleCityChange("All")}
                 bgColor="bg-secondary" // Green button
                 textColor="text-white"
                 className="text-base px-6 py-2.5" // Larger button
               >
                 Show All Cities
               </Button>
             )}
          </div>
        </div>
      )}


      {/* Pagination Controls - Colorful Hover/Active */}
      {totalPages > 1 && (
        <div className="mt-12 md:mt-16 flex justify-center items-center space-x-2 flex-wrap gap-y-3"> {/* Added gap-y */}
          {/* Previous Button */}
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            bgColor={currentPage === 1 ? "bg-gray-300" : "bg-white"}
            textColor="text-black"
            className={`text-base px-5 py-2.5 ${ // Larger text/padding
                currentPage === 1
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-yellow-100 hover:shadow-[3px_3px_0_black]" // Light yellow hover
            }`}
            style={currentPage === 1 ? { transform: 'none', boxShadow: '4px 4px 0 black'} : {}}
          >
            Prev
          </Button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
            const isActive = currentPage === number;
            return (
              <Button
                key={number}
                onClick={() => handlePageChange(number)}
                bgColor={isActive ? "bg-primary" : "bg-white"} // Active is Yellow
                textColor="text-black"
                className={`text-base w-11 h-11 flex items-center justify-center rounded-full ${ // Rounded buttons
                  isActive
                    ? "font-bold shadow-[2px_2px_0_black] ring-2 ring-black"
                    : "hover:bg-green-100 hover:font-semibold hover:shadow-[2px_2px_0_black]" // Light green hover
                }`}
                 style={isActive ? { transform: 'translate(1px, 1px)', boxShadow: '2px 2px 0 black'} : {}}
              >
                {number}
              </Button>
            );
          })}

          {/* Next Button */}
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            bgColor={currentPage === totalPages ? 'bg-gray-300' : 'bg-white'}
            textColor="text-black"
            className={`text-base px-5 py-2.5 ${ // Larger text/padding
                currentPage === totalPages
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:bg-yellow-100 hover:shadow-[3px_3px_0_black]' // Light yellow hover
            }`}
             style={currentPage === totalPages ? { transform: 'none', boxShadow: '4px 4px 0 black'} : {}}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default TicketsPage;