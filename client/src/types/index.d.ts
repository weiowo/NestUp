import { LucideIcon } from 'lucide-react';
import { AuthUser } from 'aws-amplify/auth';
import { Manager, Tenant, Property, Application } from './prismaTypes';
import { MotionProps as OriginalMotionProps } from 'framer-motion';

declare module 'framer-motion' {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

declare global {
  enum AmenityEnum {
    WasherDryer = 'WasherDryer',
    AirConditioning = 'AirConditioning',
    Dishwasher = 'Dishwasher',
    HighSpeedInternet = 'HighSpeedInternet',
    HardwoodFloors = 'HardwoodFloors',
    WalkInClosets = 'WalkInClosets',
    Microwave = 'Microwave',
    Refrigerator = 'Refrigerator',
    Pool = 'Pool',
    Gym = 'Gym',
    Parking = 'Parking',
    PetsAllowed = 'PetsAllowed',
    WiFi = 'WiFi',
  }

  enum HighlightEnum {
    HighSpeedInternetAccess = 'HighSpeedInternetAccess',
    WasherDryer = 'WasherDryer',
    AirConditioning = 'AirConditioning',
    Heating = 'Heating',
    SmokeFree = 'SmokeFree',
    CableReady = 'CableReady',
    SatelliteTV = 'SatelliteTV',
    DoubleVanities = 'DoubleVanities',
    TubShower = 'TubShower',
    Intercom = 'Intercom',
    SprinklerSystem = 'SprinklerSystem',
    RecentlyRenovated = 'RecentlyRenovated',
    CloseToTransit = 'CloseToTransit',
    GreatView = 'GreatView',
    QuietNeighborhood = 'QuietNeighborhood',
  }

  enum PropertyTypeEnum {
    Rooms = 'Rooms',
    Tinyhouse = 'Tinyhouse',
    Apartment = 'Apartment',
    Villa = 'Villa',
    Townhouse = 'Townhouse',
    Cottage = 'Cottage',
  }

  interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
  }

  interface PropertyOverviewProps {
    propertyId: number;
  }

  interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    propertyId: number;
  }

  interface ContactWidgetProps {
    onOpenModal: () => void;
    phone: string;
    name: string;
  }

  interface ImagePreviewsProps {
    images: string[];
  }

  interface PropertyDetailsProps {
    propertyId: number;
  }

  interface PropertyOverviewProps {
    propertyId: number;
  }

  interface PropertyLocationProps {
    propertyId: number;
  }

  interface ApplicationCardProps {
    application: Application;
    userType: 'manager' | 'renter';
    children: React.ReactNode;
  }

  interface CardProps {
    property: Property;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    propertyLink?: string;
  }

  interface CardCompactProps {
    property: Property;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    propertyLink?: string;
  }

  interface HeaderProps {
    title: string;
    subtitle: string;
  }

  interface NavbarProps {
    isDashboard: boolean;
  }

  interface AppSidebarProps {
    userType: 'manager' | 'tenant';
  }

  interface SettingsFormProps {
    initialData: SettingsFormData;
    onSubmit: (data: SettingsFormData) => Promise<void>;
    userType: 'manager' | 'tenant';
  }

  interface User {
    cognitoInfo: AuthUser;
    userInfo: Tenant | Manager;
    userRole: JsonObject | JsonPrimitive | JsonArray;
  }

  interface Property {
    id: number;
    name: string;
    description: string;
    pricePerMonth: number;
    securityDeposit: number;
    applicationFee: number;
    photoUrls: string[];
    amenities: string[];
    highlights: string[];
    isPetsAllowed: boolean;
    isParkingIncluded: boolean;
    beds: number;
    baths: number;
    squareFeet: number;
    propertyType: string;
    postedDate: string;
    averageRating: number;
    numberOfReviews: number;
    locationId: number;
    managerCognitoId: string;
    location: {
      id: number;
      address: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      coordinates: {
        longitude: number;
        latitude: number;
      };
    };
  }
}

export {};
