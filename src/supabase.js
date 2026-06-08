import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nifcgetgedybemiojbph.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZmNnZXRnZWR5YmVtaW9qYnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4ODQ5MzcsImV4cCI6MjA5NjQ2MDkzN30.DkLcTY_9H48i6qHqBtNVIkuspkmLVkh5dX7Uu8nTS78';

export const supabase = createClient(supabaseUrl, supabaseKey);