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
  post'flights/signup', to: 'users#create'
  get 'flights/login',   to: 'sessions#new'
  post'flights/login',   to: 'sessions#create'
  delete'flights/logout',  to: 'sessions#destroy'
  resources :users
  resources :sessions
end
