// src/services/api.js
const API_BASE_URL = 'http://localhost:8080';

// Auth API
export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  register: async (email, password, firstName, lastName) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    });
    return response.json();
  },
};

// Members API
export const membersAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/members`);
    return response.json();
  },

  getAlumni: async () => {
    const response = await fetch(`${API_BASE_URL}/api/members/alumni/list`);
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/members/${id}`);
    return response.json();
  },

  getByEmail: async (email) => {
    const response = await fetch(`${API_BASE_URL}/api/members/email/${email}`);
    return response.json();
  },

  create: async (memberData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(memberData),
    });
    return response.json();
  },

  update: async (id, memberData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/members/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(memberData),
    });
    return response.json();
  },

  delete: async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/members/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },
};

// Blogs API
export const blogsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/blogs`);
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`);
    return response.json();
  },

  create: async (blogData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(blogData),
    });
    return response.json();
  },

  update: async (id, blogData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(blogData),
    });
    return response.json();
  },

  delete: async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },
};

// Events API
export const eventsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/events`);
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`);
    return response.json();
  },

  create: async (eventData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(eventData),
    });
    return response.json();
  },

  update: async (id, eventData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(eventData),
    });
    return response.json();
  },

  delete: async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  register: async (eventId, email, name, phone) => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${API_BASE_URL}/api/events/${eventId}/register?email=${email}&name=${name}&phone=${phone}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },
};

// Auth utility functions
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
