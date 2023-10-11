/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      order: (() => {
        let orderClasses = {};
        for (let i = 1; i <= 75; i++) {
          orderClasses[i] = i;
        }
        return orderClasses;
      })()
    }
  },
  content: [
    "./_imports/*.{html,js,jsx}",
    "./*.{html,js,jsx}"
    ],
  plugins: [],
  safelist: [
  'order-1', 'order-2', 'order-3', 'order-4', 'order-5',
  'order-6', 'order-7', 'order-8', 'order-9', 'order-10',
  'order-11', 'order-12', 'order-13', 'order-14', 'order-15',
  'order-16', 'order-17', 'order-18', 'order-19', 'order-20',
  'order-21', 'order-22', 'order-23', 'order-24', 'order-25',
  'order-26', 'order-27', 'order-28', 'order-29', 'order-30',
  'order-31', 'order-32', 'order-33', 'order-34', 'order-35',
  'order-36', 'order-37', 'order-38', 'order-39', 'order-40',
  'order-41', 'order-42', 'order-43', 'order-44', 'order-45',
  'order-46', 'order-47', 'order-48', 'order-49', 'order-50',
  'order-51', 'order-52', 'order-53', 'order-54', 'order-55',
  'order-56', 'order-57', 'order-58', 'order-59', 'order-60',
  'order-61', 'order-62', 'order-63', 'order-64', 'order-65',
  'order-66', 'order-67', 'order-68', 'order-69', 'order-70',
  'order-71', 'order-72', 'order-73', 'order-74', 'order-75'
],
}