// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

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
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  register: async (email, password, firstName, lastName, role) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName, role }),
      });
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },
};

// Members API
export const membersAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/members`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/members`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  getAlumni: async () => {
    const response = await fetch(`${API_BASE_URL}/api/members/alumni/list`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/members/alumni/list`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/members/${id}`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/members/${id}`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  getByEmail: async (email) => {
    const response = await fetch(`${API_BASE_URL}/api/members/email/${email}`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/members/email/${email}`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
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
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(memberData),
      });
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
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
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/members/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(memberData),
      });
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  delete: async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/members/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/members/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },
};

// Blogs API
export const blogsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/blogs`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
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
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
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
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  delete: async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },
};

// Events API
export const eventsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/events`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/events`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/events/${id}`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
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
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
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
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  delete: async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/events/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  register: async (eventId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/events/${eventId}/register`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/events/${eventId}/register`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },
};

// News API
export const newsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/news`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/news`);
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },

  create: async (formData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/news`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/news`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  },
};

// Token Management
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
  return !!getToken();
};
