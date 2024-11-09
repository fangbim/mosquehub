import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Carousel, IconButton } from "@material-tailwind/react";
 
export function CarouselCustomArrows( { children } ) {
  return (
    <Carousel
        loop={true}
        autoplay={true}
        autoplayDelay={5000}
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="md"
          onClick={handlePrev}
          className="!absolute top-1/3 left-4 -translate-y-2/4"
        >
          <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="md"
          onClick={handleNext}
          className="!absolute top-1/3 !right-4 -translate-y-2/4"
        >
          <ChevronRightIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
        </IconButton>
      )}
    >
    {children}
    </Carousel>
  );
}