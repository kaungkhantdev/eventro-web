export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  organizer: string;
  category: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  address: string;
  status: string;
  totalCapacity: number;
  ticketsSold: number;
  revenue: number;
  views: number;
}


export interface Attendee {
  name: string;
  email: string;
  ticketType: string;
  purchaseDate: string;
}
