# AI-Marketplace

Welcome to the AI Marketplace, where you can explore various AI models, check their details, and even find code samples for integration. Our platform offers featured models based on user interests, and you can filter through starred models, which are those highly rated by the community.

## Technologies Used

- **JavaScript Framework:** Vite
- **CSS Framework:** Tailwind CSS
- **Server:** JSON Placeholder

### Major Plugins or Packages Installed

#### Client Side

- `@headlessui/react`
- `@heroicons/react`
- `@material-tailwind/react`
- `react`
- `react-dom`
- `react-icons`
- `react-router-dom`
- `react-spinners`

#### Dev Dependencies

- `@types/react`
- `@types/react-dom`
- `@vitejs/plugin-react`
- `autoprefixer`
- `concurrently`
- `eslint`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `postcss`
- `tailwindcss`
- `vite`

#### Server Side

- `json-server`

## Local Setup Steps

1. **Environment Configuration:**

   - Create a `.env` file inside the `client` folder.
   - Add the following content to the `.env` file:

     ```
     VITE_API_URL=http://localhost:3005/models
     ```

2. **Install Dependencies:**

   - Open your terminal and navigate to the project's root directory.
   - Run `npm install` to install dependencies for the server and client:

     ```bash
     cd client
     npm install
     cd ..
     npm install
     ```

3. **Start the Application:**

   - Once the dependencies are installed, start the application by running the following command in the root directory:

     ```bash
     npm start
     ```

4. **Access the Application:**

   - After starting the application, you can access it in your web browser at `http://localhost:5173`.

## Measuring Page Load Time

To understand how quickly our AI-Marketplace loads for users, I used `Performance tools` of Chrome Browser.

`Lighthouse`, a very useful Chrome extension, helped me generate a comprehensive website report for both Mobile and Desktop devices covering various aspects like performance, accessibility, SEO, and best practices.

With this data, I set out to tweak our platform to perform even better. For instance, I made sure we had a `meta description` and tossed in a `manifest.json` to boost the overall SEO.

Page load time typically falls between `1.29 to 3.32 seconds`, according to Lighthouse.

To break it down further:

- **Loading:** 2ms
- **Scripting:** 477ms
- **Rendering:** 27ms
- **Painting:** 4ms
- **System:** 79ms
- **Idle:** 1443ms
- **Total:** 2032ms

## Performance Optimizations

- I noticed that high-quality images were taking considerable time to load. To address this, I `compressed the images` using TinyPNG to reduce their file sizes without compromising quality.

- Since the AI Marketplace relies on JSON data loading, I implemented a `spinner` to indicate to users that the website is still loading. This provides a better user experience while waiting for the data to be fetched.

- To improve code readability and maintainability, I followed a structured approach by organizing `components and pages` into separate files. This code-splitting technique not only enhances readability but also facilitates better maintenance and debugging processes.

By implementing these optimizations, I aimed to enhance the overall performance and user experience of the AI Marketplace.
