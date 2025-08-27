import { Link } from 'react-router-dom';

interface DestinationCardProps {
  slug: string;
  name: string;
  country: string;
  region: string;
  description: string;
  image: string;
  tags: string[];
}

const DestinationCard = ({ slug, name, country, region, description, image, tags }: DestinationCardProps) => {
  return (
    <article className="card group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={`${name}, ${country} - ${description}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="chip chip-primary">
            {region}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <header className="mb-3">
          <h3 className="font-serif font-bold text-xl text-foreground mb-1">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm">{country}</p>
        </header>
        
        <p className="text-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="chip chip-muted">
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/destinations/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm transition-colors"
        >
          View Guide
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default DestinationCard;