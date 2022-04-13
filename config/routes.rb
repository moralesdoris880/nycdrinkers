Rails.application.routes.draw do
  
  resources :drinks, only: [:index]
  resources :restaurants, only: [:index]
  resources :ratings
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/all', to: 'ratings#all'
  get '/user_ratings', to: 'ratings#user_ratings'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end