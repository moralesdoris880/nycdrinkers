Rails.application.routes.draw do
  
  resources :drinks, only: [:index,:show]
  resources :restaurants, only: [:index]
  resources :ratings
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/user_ratings', to: 'ratings#user_ratings'
  get '/users', to: 'ratings#users'
  get '/check_drinks', to: 'users#check_drinks'
  get '/drinks3', to: 'ratings#drinks3'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end