import { Module } from '@nestjs/common';
import { FornecedorModule } from './fornecedor/fornecedor.module';

@Module({
  imports: [FornecedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
