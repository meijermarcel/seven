import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://flpmocapeuqdgodnknhd.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZscG1vY2FwZXVxZGdvZG5rbmhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0Mjk1NjEsImV4cCI6MjAxMTAwNTU2MX0.A9x0sXnon_zK174WIG0BX6AEblH9v-ksKA7wFTXTUKw'
);
