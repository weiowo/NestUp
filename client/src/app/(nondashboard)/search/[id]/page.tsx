'use client';

import {
  useGetAuthUserQuery,
  useGetPropertyQuery,
  useGetTenantQuery,
  useRemoveFavoritePropertyMutation,
  useAddFavoritePropertyMutation,
} from '@/state/api';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import ImagePreviews from './ImagePreviews';
import PropertyOverview from './PropertyOverview';
import PropertyDetails from './PropertyDetails';
import PropertyLocation from './PropertyLocation';
import ContactWidget from './ContactWidget';
import ApplicationModal from './ApplicationModal';

export default function SingleListing() {
  const { id } = useParams();
  const propertyId = Number(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: authUser } = useGetAuthUserQuery();
  const { data: tenant } = useGetTenantQuery(
    authUser?.cognitoInfo?.userId || '',
    {
      skip: !authUser?.cognitoInfo?.userId,
    },
  );

  const {
    data: property,
    isError,
    isLoading,
  } = useGetPropertyQuery(propertyId);
  const [addFavorite] = useAddFavoritePropertyMutation();
  const [removeFavorite] = useRemoveFavoritePropertyMutation();

  if (isLoading) return <>Loading...</>;
  if (isError || !property) {
    return <>Property not Found</>;
  }

  const isFavorite = tenant?.favorites?.some(
    (fav: Property) => fav.id === propertyId,
  );

  const handleFavoriteToggle = async () => {
    if (!authUser) return;
    if (isFavorite) {
      await removeFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        propertyId,
      });
    } else {
      await addFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        propertyId,
      });
    }
  };

  return (
    <div>
      <ImagePreviews
        images={property.photoUrls || ['/images/landing-call-to-action.png']}
      />
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
        <div className="order-2 md:order-1">
          <PropertyOverview
            isFavorite={isFavorite}
            onFavoriteToggle={handleFavoriteToggle}
            property={property}
          />
          <PropertyDetails property={property} />
          <PropertyLocation property={property} />
        </div>

        <div className="order-1 md:order-2">
          <ContactWidget
            name={property.managerName}
            phone={property.managerPhoneNumber}
            onOpenModal={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {authUser && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          propertyId={propertyId}
        />
      )}
    </div>
  );
}
