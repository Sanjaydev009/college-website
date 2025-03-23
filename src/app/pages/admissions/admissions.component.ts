import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admissions',
  imports:[NgFor,NgIf],
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent {
  admissionSteps = [
    { step: 1, title: 'Fill Online Application', description: 'Online admission portal launching soon! Stay tuned.', icon: '🌐', status: 'Coming Soon' },
    { step: 2, title: 'Offline Admission', description: 'Visit our branch to complete the admission process in person.', icon: '🏛️', status: 'Available Now' },
    { step: 3, title: 'Submit Documents', description: 'Submit academic records, ID proof, and required documents.', icon: '📄' },
    { step: 4, title: 'Pay Application Fee', description: 'Complete the payment securely at the branch.', icon: '💳' },
    { step: 5, title: 'Confirm Admission', description: 'Receive confirmation and start your journey with us!', icon: '🎓' }
  ];

  eligibilityCriteria = [
    'Minimum 50% marks in previous qualification (varies by course)',
    'Entrance exam score (if applicable)',
    'Personal interview for certain programs'
  ];

  requiredDocuments = [
    'Previous academic certificates',
    'Government-issued ID (Aadhar, Passport, etc.)',
    'Passport-size photographs',
    'Category certificate (if applicable)',
    'Proof of residence'
  ];

  feeStructure = [
    { course: 'B.Tech', fee: '₹1,20,000 per year' },
    { course: 'MCA', fee: '₹90,000 per year' },
    { course: 'MBA', fee: '₹1,50,000 per year' }
  ];

  contactDetails = {
    phone: '+91 98765 43210',
    email: 'admissions@college.edu',
    address: 'XYZ College, Hyderabad, Telangana'
  };
}