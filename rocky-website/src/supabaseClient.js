// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://trudrzrztswykdplgqsx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydWRyenJ6dHN3eWtkcGxncXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMzE2NzAsImV4cCI6MjA4MTkwNzY3MH0.7yNR7uRIVoE5MSZFYiBWkXgbNv5xrfHMinsJbNqL-jg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);