# MBA Admissions Copilot

A comprehensive platform for MBA applicants featuring AI-powered assessments, collaborative essay editing, and personalized coaching.

## Features

### 🎯 **Assess** - School Strategy Assessment
- Upload resume and test scores
- Get personalized school recommendations
- Receive application strategy and timeline
- Track your chances at target schools

### ✍️ **Edit** - Collaborative Essay Editor
- Real-time collaborative editing with Liveblocks
- AI-powered redlines and suggestions
- Multiple essay prompt templates
- Version history and drafts

### 👨‍🏫 **Coach** - Expert Guidance
- Direct messaging with MBA admissions coaches
- Book 1:1 sessions with experts
- Get personalized feedback on your application
- Interview preparation support

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)
- **Real-time**: Liveblocks
- **File Storage**: AWS S3
- **Usage Tracking**: DynamoDB
- **Payments**: Stripe
- **Email**: Resend
- **Styling**: Tailwind CSS

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# AWS
AWS_REGION=us-east-1
S3_BUCKET=your_s3_bucket_name
DYNAMODB_TABLE=your_dynamodb_table_name

# Liveblocks
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Resend
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com
```

## Database Schema

### Profiles Table
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  subscription_tier TEXT DEFAULT 'free',
  stripe_customer_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Assessments Table
```sql
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  inputs JSONB NOT NULL,
  result JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local.example` to `.env.local` and fill in your API keys

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage Limits

The platform implements tier-based usage limits:

- **Free**: 1 assessment, 1 essay doc, 3 redlines/month
- **Plus**: 3 assessments, 5 essay docs, 20 redlines/month  
- **Pro**: Unlimited assessments, 20 essay docs, 100 redlines/month

## API Endpoints

- `POST /api/assessment/run` - Run school strategy assessment
- `POST /api/redline` - Get AI feedback on essays
- `GET /api/s3-presign` - Get S3 upload URL
- `POST /api/liveblocks-auth` - Liveblocks authentication
- `POST /api/stripe/webhook` - Stripe webhook handler

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details 