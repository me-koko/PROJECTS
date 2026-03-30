import type { WeatherData } from "@/api/types"
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { useFavorite } from "@/hooks/use-favorite";
import { toast } from "sonner";

interface FavoriteButtonProps {
    data: WeatherData;
}

const FavoriteButton = ({ data }: FavoriteButtonProps) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorite();
    const isCurrentlyFavorite = data ? isFavorite(data.coord.lat, data.coord.lon) : false;

    const handleToggleFavortie = () => {
        if(isCurrentlyFavorite) {
            removeFavorite.mutate(`${data.coord.lat}-${data.coord.lon}`);
            toast.error(`Removed ${data.name} from Favorites`);
        } else {
            addFavorite.mutate({
                name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
                country: data.sys.country,
            });
            toast.success(`Added ${data.name} to Favorites`)
        }
    };

  return (
    <div>
        <Button 
            variant="outline"
            size={"icon"}
            onClick={handleToggleFavortie}
            className={isCurrentlyFavorite ? "!bg-yellow-500 hover:!bg-yellow-600 !text-white" : ""}
        >
            <Star 
                className={`h-4 w-4 ${isCurrentlyFavorite ? "fill-current text-white" : ""}`}
            />
        </Button>
    </div>
  )
}

export default FavoriteButton