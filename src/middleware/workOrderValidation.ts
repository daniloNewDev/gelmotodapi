import { body } from 'express-validator';

export const workOrderCreateValidation = () => {

  return [
    body('workOrderNumber').isNumeric().withMessage('Número de Ordem de Serviço obrigatório'),
    body('customerName').isString().withMessage('Nome do cliente é obrigatório'),
    body('vehiclePlate').isString().withMessage('Placa do veículo é obrigatória'),
    body('vehicleModel').isString().withMessage('Modelo do veículo é obrigatório'),
    body('serviceDescription').isString().withMessage('Descrição do serviço é obrigatória'),
    body('costEstimate').isNumeric().withMessage('Estimativa de custo é obrigatória'),
    body('mechanicName').isString().withMessage('Nome do mecânico é obrigatório'),
    body('status').default('open').isIn(['open', 'in_progress', 'closed']).withMessage('Status deve ser "open", "in_progress" ou "closed"'),
    body('itemsPurchased').optional().isArray().withMessage('Itens comprados deve ser inseridos'),
  ]

}