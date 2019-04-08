Rails.application.routes.draw do
  get 'users/new'
  root 'flights#flight'
  get 'flights/flight'
  get 'flights/maps'
  get 'flights/login'
  get 'flights/signup'
  get 'flights/searchFlights'
  get 'flights/pickFlight'
  get 'flights/passengerInfo'
  get 'flights/itinerary'
  get 'flights/signup', to: 'users#new'
  post'flights/signups', to: 'users#create'
  resources :users
end
