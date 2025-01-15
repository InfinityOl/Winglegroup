# Vue.js User Management Application

A modern single-page application (SPA) built with Vue 3, TypeScript, and Vite that displays a list of users and their details. The application integrates with a REST API to fetch user data and provides search functionality.

## Features

- 📋 Display list of users in a card layout
- 🔍 Real-time search functionality to filter users by name
- 👤 Detailed user profile view with additional information
- 📱 Responsive design for all device sizes
- 🎨 Modern UI with smooth transitions
- 🔄 Integration with REST API

## Live Demo

Check out the live application: [Vue Users App](https://effulgent-banoffee-3234b4.netlify.app)

## Tech Stack

- Vue 3
- TypeScript
- Vue Router
- Vite
- SCSS
- REST API Integration

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── SearchBar.vue
│   └── UserCard.vue
├── views/            # Page components
│   ├── UserList.vue
│   └── UserDetails.vue
├── router/           # Route configurations
├── App.vue          # Root component
└── main.ts         # Application entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Features in Detail

### User List
- Displays users in a card format
- Each card shows user's name and email
- First letter avatar for visual representation
- Smooth hover animations

### Search Functionality
- Real-time filtering of users
- Case-insensitive search
- Searches through user names

### User Details
- Comprehensive user information display
- Contact information
- Address details
- Company information
- Back navigation

## API Integration

The application uses the JSONPlaceholder API to fetch user data:
- Users endpoint: `https://jsonplaceholder.typicode.com/users`
- Individual user endpoint: `https://jsonplaceholder.typicode.com/users/{id}`

## Styling

- SCSS for enhanced CSS features
- Responsive design using modern CSS
- Clean and intuitive user interface
- Consistent color scheme and typography

## Performance

- Optimized bundle size
- Lazy loading of routes
- Efficient state management
- Fast search functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
