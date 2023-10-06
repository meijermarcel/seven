export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      games: {
        Row: {
          away_score: number | null
          away_spread: number | null
          away_team: number | null
          created_at: string
          date_time: string | null
          home_score: number | null
          home_spread: number | null
          home_team: number | null
          id: number
          total: number | null
          updated_at: string | null
        }
        Insert: {
          away_score?: number | null
          away_spread?: number | null
          away_team?: number | null
          created_at?: string
          date_time?: string | null
          home_score?: number | null
          home_spread?: number | null
          home_team?: number | null
          id?: number
          total?: number | null
          updated_at?: string | null
        }
        Update: {
          away_score?: number | null
          away_spread?: number | null
          away_team?: number | null
          created_at?: string
          date_time?: string | null
          home_score?: number | null
          home_spread?: number | null
          home_team?: number | null
          id?: number
          total?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "games_away_team_fkey"
            columns: ["away_team"]
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "games_home_team_fkey"
            columns: ["home_team"]
            referencedRelation: "teams"
            referencedColumns: ["id"]
          }
        ]
      }
      leagues: {
        Row: {
          created_at: string
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      teams: {
        Row: {
          city: string | null
          created_at: string
          id: number
          league_id: number | null
          logo_link: string | null
          name: string | null
          updated_at: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          id?: number
          league_id?: number | null
          logo_link?: string | null
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          id?: number
          league_id?: number | null
          logo_link?: string | null
          name?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_league_id_fkey"
            columns: ["league_id"]
            referencedRelation: "leagues"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
