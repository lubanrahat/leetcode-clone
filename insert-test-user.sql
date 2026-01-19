INSERT INTO "User" (
  "id", 
  "clerkId", 
  "name", 
  "email", 
  "role", 
  "firstName", 
  "lastName", 
  "imageUrl", 
  "createdAt", 
  "updatedAt"
) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'test-clerk-id',
  'Test User',
  'test@example.com',
  'ADMIN',
  'Test',
  'User',
  'https://example.com/avatar.jpg',
  NOW(),
  NOW()
) ON CONFLICT ("id") DO NOTHING;
