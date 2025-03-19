'use client';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Auth from '../authProvider';

const validAuthRoutes = ['signin', 'signup'];

export default function AuthPage() {
  const params = useParams();
  if (!params.auth || !validAuthRoutes.includes(params.auth as string)) {
    return notFound();
  }

  return <Auth>{params.auth}</Auth>;
}
