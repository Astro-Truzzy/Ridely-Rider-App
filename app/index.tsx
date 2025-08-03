import { Redirect } from 'expo-router';

export default function Index() {
  // Check if user is a rider or regular user
  // In a real app, you'd check user role from authentication
  const userRole = 'user'; // or 'rider' based on login
  
  if (userRole === 'rider') {
    return <Redirect href="/(rider)/dashboard" />;
  }
  
  return <Redirect href="/(auth)/loading" />;
}